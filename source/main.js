var colors = ["#B97A95","#716F81","#055052","#B05B3B","#FAAD80","#7C83FD"]

class quoteInfo{
    constructor(quote,author){
        this.quote = quote;
        this.author = author;
    }
}


var quoteArray = [
    new quoteInfo("Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.","- Booker T. Washington"),
    new quoteInfo("If the wind will not serve, take to the oars.","- Latin Proverb"),
    new quoteInfo("You miss 100% of the shots you don’t take.","- Wayne Gretzky"),
    new quoteInfo("I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.","- Michael Jordan"),
    new quoteInfo("We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.","- Marie Curie"),
    new quoteInfo("There is only one way to avoid criticism: do nothing, say nothing, and be nothing.","- Aristotle"),
    new quoteInfo("A person who never made a mistake never tried anything new.","- Albert Einstein"),
    new quoteInfo("The most difficult thing is the decision to act, the rest is merely tenacity.","- Amelia Earhart"),
    new quoteInfo("Every child is an artist. The problem is how to remain an artist once he grows up.","- Pablo Picasso"),
    new quoteInfo("It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.","- Ann Landers"),
    new quoteInfo("First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.","- Aristotle"),
    new quoteInfo("You may be disappointed if you fail, but you are doomed if you don’t try.","- Beverly Sills"),
    new quoteInfo("We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.","- Plato"),
    new quoteInfo("Everything you’ve ever wanted is on the other side of fear.","- George Addair"),
    new quoteInfo("Go confidently in the direction of your dreams. Live the life you have imagined.","- Henry David Thoreau"),
    new quoteInfo("The best time to plant a tree was 20 years ago. The second best time is now.","- Chinese Proverb"),
    new quoteInfo("Remember that not getting what you want is sometimes a wonderful stroke of luck.","- Dalai Lama"),
    new quoteInfo("Too many of us are not living our dreams because we are living our fears.","- Les Brown"),
    new quoteInfo("How wonderful it is that nobody need wait a single moment before starting to improve the world.","- Anne Frank"),
    new quoteInfo("The two most important days in your life are the day you are born and the day you find out why.","- Mark Twain"),
    new quoteInfo("Believe you can and you’re halfway there.","- Theodore Roosevelt"),
    new quoteInfo("Life is what happens to you while you’re busy making other plans.","- John Lennon"),
    new quoteInfo("Start where you are. Use what you have. Do what you can.","- Arthur Ashe"),
    new quoteInfo("Certain things catch your eye, but pursue only those that capture the heart.","- Ancient Indian Proverb"),
    new quoteInfo("Remember that not getting what you want is sometimes a wonderful stroke of luck.","- Dalai Lama")
    
]
function performtask(){
    let randomQuoteIndex = Math.floor(Math.random()*quoteArray.length)
    document.getElementById("quote").innerHTML = quoteArray[randomQuoteIndex].quote;
    document.getElementById("author-name").innerHTML = quoteArray[randomQuoteIndex].author;
    let randomColorIndex = Math.floor(Math.random() * 6);
    document.body.style.backgroundColor = colors[randomColorIndex];
    document.getElementById("quote").style.color = colors[randomColorIndex];
    document.getElementById("author-name").style.color = colors[randomColorIndex];
    //for changing the background color of anchor tags
    let collection = document.getElementsByTagName("a");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.backgroundColor = colors[randomColorIndex];
    }
}