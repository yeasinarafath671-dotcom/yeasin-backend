import mongoose   from "mongoose";


const conectdb = async() => {
      try{
     const conect =  await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.dbname}`);
     console.log('mongodb conected is a ', conect.connection.host);
     
      } 
      catch(err){
        
      console.log('some thing wrong ' , err);
       process.exit(1);

      }
      
      
}
export default conectdb;
