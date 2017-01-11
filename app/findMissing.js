module.exports = {
 
   findMissing: function(arg1, arg2) {
      //Assigns the lager array to choice
      var choice = (arg1.length >= arg2.length)? arg1:arg2;
      //Assigns the lesser array to notchoice
      var notchoice = (arg1.length >= arg2.length)? arg2:arg1;
      var check;
      var i = 0;
      while(i < choice.length)
      {
         //Assigns the current length of notchoice to check 
         check = notchoice.length;
         //Iterates over notchoice
         for(var j = 0; j < notchoice.length; j +=1)
         {
            //Check if the current element in choice matches any element in notchoice
            if(choice[i] === notchoice[j])
            {
               notchoice.splice(j,1);
            }
         }
         //Check if the length of notchoice change in the last iteration
         if(check > notchoice.length)
         {
            choice.splice(i,1);
            i = 0;
         }
         else
         {
            i += 1;
         }
      }
      //Returns 0 if the length of choice and not choice are the same
      if(choice.length === notchoice.length)
      {
         return 0;
      }
      //Return choice[0] if the length of choice is greater
      else
      {
         return choice[0];
      }
   }
}