// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    //will either start with https:// or www., 
    
    //https://www.google.com
    //http://www.youtube.com
    //www.amazon.com
    
  
  //   if (there is a www.) return what's between the dots
    if(url.includes('www.')){
  //   ^^^ using split 'www.'[1], then by  '.'[0]
        return url.split('www.')[1].split('.')[0]
  //   if there's no www., split by "//" then by "."
    }else if(url.includes('://')){
      return url.split('//')[1].split('.')[0]
    }else{
  // if url just starts with domain
      return url.split('.')[0]
    }
  }