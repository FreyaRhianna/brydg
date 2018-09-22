from GlobalVariables import db
from ..utils import generate_postcodes

class LandRegistrySpider(scrapy.Spider):
    name = "landRegistrySpider"

    def start_requests(self):
        db.drop_collection("landRegistryData");
        #urls = ['http://landregistry.data.gov.uk/app/ppd/search?et%5B%5D=lrcommon%3Afreehold&et%5B%5D=lrcommon%3Aleasehold&limit=100&nb%5B%5D=true&nb%5B%5D=false&postcode=gl15&ptype%5B%5D=lrcommon%3Adetached&ptype%5B%5D=lrcommon%3Asemi-detached&ptype%5B%5D=lrcommon%3Aterraced&ptype%5B%5D=lrcommon%3Aflat-maisonette&ptype%5B%5D=lrcommon%3AotherPropertyType&tc%5B%5D=ppd%3AstandardPricePaidTransaction&tc%5B%5D=ppd%3AadditionalPricePaidTransaction']

        #for url in urls:
        #    yield scrapy.Request(url=url, callback=self.parse)

        postcodehalfs = []
        for postcode in generate_postcodes():
            postcodehalf = postcode.split(" ")[0].lower()
            if postcodehalf not in postcodehalfs:
                url = "http://landregistry.data.gov.uk/app/ppd/search?et%5B%5D=lrcommon%3Afreehold&et%5B%5D=lrcommon%3Aleasehold&limit=100&nb%5B%5D=true&nb%5B%5D=false&postcode={}&ptype%5B%5D=lrcommon%3Adetached&ptype%5B%5D=lrcommon%3Asemi-detached&ptype%5B%5D=lrcommon%3Aterraced&ptype%5B%5D=lrcommon%3Aflat-maisonette&ptype%5B%5D=lrcommon%3AotherPropertyType&tc%5B%5D=ppd%3AstandardPricePaidTransaction&tc%5B%5D=ppd%3AadditionalPricePaidTransaction".format(postcodehalf)
                yield scrapy.Request(url=url, callback=self.parse, meta={'postcode': postcodehalf, "type": "sell"})
                postcodehalfs.append(postcodehalf)

        def parse(self, response):
        postcode = response.meta['postcode']


        path = response.xpath('//ul[@class="list-unstyled ppd-results"]/li')
        for item in path:
            property = {}
            transactions = item.xpath('.//div[2]//div[1]//table//tbody//tr')
            property['transactions'] = []
            for transaction in transactions:
                sale = {}
                sale['date'] = transaction.css('td:nth-child(2)::text').extract_first()
                sale['price'] = transaction.css('td:nth-child(3)::text').extract_first().encode('utf-8').replace("\xc2\xa3","")
                property['transactions'].append(sale)
            propertyDetails = item.xpath('.//div[2]//div[2]//table//tbody//tr')

            for propertyDetail in propertyDetails:
                val = None
                cat = None
                if (propertyDetail).css('td:nth-child(2)::text').extract_first() != None:
                    val = (propertyDetail).css('td:nth-child(2)::text').extract_first().strip().upper()
                if (propertyDetail).css('td:nth-child(1)::text').extract_first() != None:
                    cat = (propertyDetail).css('td:nth-child(1)::text').extract_first().strip().replace(".", "")
                    property[cat] = val


            attributes = item.xpath('//div[2]//div[3]//table//tbody//tr')

            property['Type'] = (attributes[1]).css('td:nth-child(2)::text').extract_first().strip()
            property['NewBuild'] = (attributes[2]).css('td:nth-child(2)::text').extract_first().strip()
            property['EstateType'] = (attributes[3]).css('td:nth-child(2)::text').extract_first().strip()
            print(property)
            #db.landRegistryData.insert(property)

        # update or insert to the database
