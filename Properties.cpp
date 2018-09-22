#include <eosiolib/eosio.hpp>

using namespace eosio;

class Properties : public contract {
	using contract::contract;
	
	private:
	
		//@abi table propertydata i64
		struct propertydata {
			std:String address;
			uint64_t privateKey;
			uint64_t publicKey;
			uint64_t databaseHash;
			uint64_t primary_key() const  { return address::parse<i64>(); }
			EOSLIB_SERIALIZE(propertydata,(databaseHash)(publicKey)(privateKey)(address);
		};
		
  public:
  
		Properties(account_name s):contract(s){
			struct propertydata pd;
			//set address here
			//Generate random private key
			privateKey = "dfkhdslukfjhbdkfsjer89erusidfgewor9eaushkworieww48479o43878493789":parse<i64>(); //placeholder
			//Issue Token to the owner
			
			this->pd = pd;
		}
		
		//@abi action
		uint64_t getPublic(){
			return publicKey;
		}
	  
		//@abi action
		void changeOwner([token] tokens, [[account_name buyer, int share]]) {
			//Action
		}
		
		//@abi action
		uint64_t getOwner(){
			return databaseHash;
		}
};

EOSIO_ABI( Properties,(getOwner, getPublic, changeOwner, Properties) )