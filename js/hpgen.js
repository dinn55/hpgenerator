$(document).ready(function() {
  
  var trait = new Array(
    "Grouchy", 
    "Jolly", 
    "Brave", 
    "Clever",
    "Bombastic",
    "Aging",
    "Youthful",
    "Prickly",
    "Loner",
    "Life-of-the-party",
    "Lazy",
    "Nasty",
    "Arrogant",
    "Helpful",
    "Slick",
    "Serious",
    "Stuck-up",
    "Affable",
    "Bossy",
    "Secretly insecure",
    "Bold and brash",
    "Risk-taking",
    "Vain",
    "Eccentric",
    "Funny",
    "Passionate",
    "Ambitious",
    "Debonair",
    "Bungling",
    "Savage",
    "Carefree",
    "Excitable",
    "Intense",
    "Accident-prone",
    "Gregarious",
    "Insufferable",
    "Too-gay-to-function",
    "Flirty",
    "Fastidious",
    "Obnoxious",
    "Hard-working"
  );
  var blood = new Array(
    "muggleborn", 
    "pureblood", 
    "half-blood", 
    "squib"
  );
  var job = new Array(
    "Auror", 
    "theif", 
    "professor", 
    "reporter",
    "quidditch player",
    "obliviator",
    "dragon wrangler",
    "parent of three",
    "lighthouse keeper",
    "potion maker",
    "former Death Eater",
    "beaurocrat",
    "diviner",
    "wand-maker",
    "lawyer",
    "astronomer",
    "fiction writer",
    "magical beings rights activist",
    "lag-about",
    "professional duelist",
    "librarian",
    "Ministry of Magic secretary",
    "Magical Law Patrol officer",
    "fraud",
    "smuggler",
    "healer",
    "muggle expert",
    "werewolf hunter",
    "ICW delegate",
    "portkey maker",
    "unspeakable",
    "Azkaban guard",
    "cursebreaker",
    "chef",
    "barista",
    "model",
    "magical architect",
    "club promoter",
    "fashion designer",
    "tinker",
    "Muggle-Worthy Excuse Commitee member",
    "Wizengamot Elder",
    "actor",
    "Wizarding Wireless Network host",
    "human Gringotts employee",
    "line cook",
    "Floo Network chimney sweep",
    
  );
  var from = new Array(
    "large family", 
    "France", 
    "an ancient coven under the river", 
    "an orphanage",
    "remotest Scotland",
    "the swamp",
    "a wealthy background",
    "a long line of politicians",
    "Godric's Hollow",
    "a broken home",
    "a family of dragon-keepers",
    "a tight-knit adopted family",
    "a New Zealand farm",
    "a big city in Thailand",
    "rural Russia",
    "northern Canada",
    "Slandermouth",
    "an artist colony",
    "from a haunted family",
    "a long line of frauds and criminals"
  );
  var fact = new Array(
    "can't seem to shut up", 
    "has vivid visions", 
    "is notoriously hex-happy", 
    "is addicted to truth potions",
    "was turned into a werewolf at age 16",
    "has a secret criminal life",
    "is always hinting at a dark past",
    "can barely use a wand",
    "had an accident with Polyjuice Potion",
    "was struck by lightning",
    "has a secret ambition",
    "is preoccupied with vampires",
    "keeps a strange familiar",
    "is a gambling genius",
    "is a failed muggle scientist",
    "has invented a dozen spells",
    "believes they were famous in a past life",
    "is haunted by a ghost",
    "obsessed with death",
    "talks to animals",
    "refers to themselves in the third person",
    "started their own business",
    "was raised by centaurs",
    "who has a penchant for the dramatic",
    "is always talking about their novel",
    "loves dispensing wisdom",
  );
  
  randomTrait = trait[Math.floor( Math.random() * trait.length)];
  randomBlood = blood[Math.floor( Math.random() * blood.length)];
  randomJob = job[Math.floor( Math.random() * job.length)];
  randomFrom = from[Math.floor( Math.random() * from.length)];
  randomFact = fact[Math.floor( Math.random() * fact.length)];
  
  $('#trait').text(randomTrait);
  $('#blood').text(randomBlood);
  $('#job').text(randomJob);
  $('#from').text(randomFrom);
  $('#fact').text(randomFact);

  $("#refresh").click(function(){
    location.reload(true);
  });
  
})