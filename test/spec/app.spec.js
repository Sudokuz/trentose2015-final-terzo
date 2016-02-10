/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the ParlaModel object */

describe("Parla", function() {
    describe("ParlaModel getLanguageScore", function() {
  it("should not award scores when not detecting any words", function() { 
      
      expect(ParlaModel.getLanguageScore("x","English")).toBe(0);
    
  });   
        
        it("should award a score when detecting 1 word", function() { 
      
      expect(ParlaModel.getLanguageScore("the","English")).toBe(1);
    
  }); 
        it("should award 2 scores when detecting 2 words", function() { 
      
      expect(ParlaModel.getLanguageScore("the best of","English")).toBe(2);
    
  }); 
        
    });
    
    
    describe("ParlaModel detectLanguage", function(){
        
       it("should not detect any language properly", function() { 
      
      expect(ParlaModel.detectLanguage("x")).toBe(null);
    
  });  
        it("should detect a language correctly in case of 1 match", function() { 
      
      expect(ParlaModel.detectLanguage("of xxxx")).toBe("English");
    
  }); 
        it("should detect a language correctly with 2 matches", function() { 
      
      expect(ParlaModel.detectLanguage("of the best xxx")).toBe("English");
    
  }); 
        it("should detect a language properly when there are conflicts", function() { 
      
      expect(ParlaModel.detectLanguage("non of the best xxx")).toBe("English");
    
  }); 
        
    
    });
 
});
