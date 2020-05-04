class Eyler{
    
    eyler(n){
        let res = n;
        let en = n;
        let k=0; 
      for(let i = 2;i<en+1;i++)
      {
      if((n % i)==0)
      {
       while((n%i)==0)
       {
           n=n/i;
           if(i!=k)
           {
           res=res*(1-(1/i));
           k=i;
           }
           if(n<=1)
          {
              return res;
          }
       }
      }
  }
}
getreverse(a,mod){
        let n = mod;
        let pow = this.eyler(n) - 1;
        let bin = parseInt(pow).toString(2);
        let a0 = a;
        for(let i = 1;i<bin.length;i++)
        {
            if(bin[i]=='1')
            {
                a0=(a0*a0*a)%mod;
            }
            if(bin[i]=='0')
            {
                a0=(a0*a0)%mod;
            }
        }
       let result=a0;
        if(result<0)
        {
            result+=mod;
        }
        return result;
}
}
module.exports = Eyler;