var ParlaModel = {
  
   /* Langs contain the list of language with their corresponding
    * dictionaries 
    */
   langs : languages, 
  
   /* Returns the score of the given phrase in the given language
    * The score is computed simply as the number of words - in the
    * language dictionary - that are found in the phrase
    * @return score, if language is valid
    *         null, if language is not valid
    */
   getLanguageScore : function (phrase, language){
        var score = 0;
       for(var j in this.langs){
           if(this.langs[j].name == language){
        for(var i in this.langs[j].dictionary){
         
            if (phrase.toLowerCase().search(this.langs[j].dictionary[i]) != -1){
             score++;
            }
        }
       }
       }
       console.log(score);
       return score;
   },
  
   /* Returns the name of the language in which the phrase
    * (most likely) is written. The detection essentially 
    * returns the language with higher *score*. 
    */
   detectLanguage : function (phrase) {
       var maxScore = "";
       var score = 0;
       for(var k in this.langs){
           score = this.getLanguageScore(phrase, this.langs[k].name);
           if(score > maxScore){maxScore = this.langs[i].name;}
        }
       
       return maxScore;
   }
         
};



var ParlaView = {
    
    /* presents first view and enables click functionality */
    init: function(){
        
        var self = this;
        
        $(".lang-name").empty();
        $(".lang-name").hide();
        
        
    },
    
    /* updates HTML with processed information */
    render: function(stuff){
        
        $(".lang-name").empty();
        $(".lang-name").show();
            
        $(".lang-name").append(stuff);
        
    }
    
};

var ParlaController = {
    
    /* initializes app on new run */
    init: function(){
        ParlaView.init();
    },
    
    /* method to retrieve data from Model */
    getLanguages: function(){
        return ParlaModel.langs();
    },
    
    /* actions to be performed on click */
    action: function(phrase){
        return ParlaModel.detectLanguage(phrase);
    },
    
    render: function(ris){
        
        ParlaView.render(ris);
    }
};


/* enable functionalities after document fully loaded HTML and scripts */
$(document).ready(function(){
    ParlaController.init();
    
    $("button").click( function() {
            var ris = ParlaController.action( $("input").text() );
            ParlaController.render(ris);
        });
        
});
