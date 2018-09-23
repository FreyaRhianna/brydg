#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>

using namespace eosio;
using std::string;

class property : public contract {
        using contract::contract;
        public:

            property(account_name s): contract(s){}
            //@abi action 
            void newProperty(account_name runner, string address, string private_key, vector<std::string> owners) {
                //so goal is to create a brand new user.
                //the persistence is done via the persistence api, but it is a singleton
                //Task:
                //emplace in the table the property with requisite info
                propertytype thisProperty(_self,_self);
                thisProperty.emplace(runner, [&](auto house) {
                    house.unique_id = thisProperty.available_primary_key();
                    house.address = address;
                    house.private_key = private_key;
                });
                
                
                
	    }
                



            

            //@abi action
            void addHash(uint64_t id, uint64_t hash) {
                 propertytype thisProperty(_self,_self);
                 auto property = thisProperty.begin();
                 eosio_assert(property != thisProperty.end(), "Property does not exist");
		 auto prop = thisProperty.get(id);
                 prop.hashes.push_back(hash);
            }
           

        private:

            //@abi table owner i64
            struct owner {
                account_name own_id;
                uint64_t percentage;
                uint64_t primary_key() const { return own_id; }
                EOSLIB_SERIALIZE(owner,(own_id)(percentage));
            };
            

            //@abi table propertydata i64
            struct propertydata {
                uint64_t unique_id;
                vector<owner> owners;
                vector<uint64_t> hashes; 
                string address;
                string private_key;


                uint64_t primary_key() const { return unique_id; }
            };

            typedef eosio::multi_index<N(propertydata),propertydata> propertytype;
};
    
    
   
