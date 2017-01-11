module.exports = {
 
   findMissing: function(arg1, arg2) {
      var choice = (arg1.length >= arg2.length)? arg1:arg2;
      var notchoice = (arg1.length >= arg2.length)? arg2:arg1;
      var check = notchoice.length;
      var i = 0;
      while(i < choice.length)
      {
         check = notchoice.length;
         for(var j = 0; j < notchoice.length; j +=1)
         {
            if(choice[i] === notchoice[j])
            {
               notchoice.splice(j,1);
            }
         }
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
      if(choice.length === notchoice.length)
      {
         return 0;
      }
      else if(choice.length > notchoice.length)
      {
         return choice[0];
      }
      else
      {
         return notchoice[0];
      }
   }
}