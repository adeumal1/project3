export const getTitle = () => {
    let originalTitle = document.title; 
    window.addEventListener('blur', function() {
        document.title = "Hey, come back!"; 
      });
      
      window.addEventListener('focus', function() {
        document.title = originalTitle; 
      });
};
