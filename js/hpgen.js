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
    "Hard-working",
    "Walking disaster",
    "Youthful",
    "Aloof",
    "Coy",
    "Adreneline junkie",
    "Scatter-brained",
    "Proud",
    "Pessimistic",
    "Self-centered",
    "Jealous",
    "Warm-hearted",
    "Brutally honest",
    "Fair-minded",
    "Perpetually jumpy",
    "Insufferably kind",
    "Earnest",
    "Disciplined",
    "Grizzled veteran",
    "Absolutely insane",
    "Shaky",
    "Nurturing",
    "Pushover",
    "Good and pure",
    "Chaotic",
    "Stuff-shirt",
    "Adorable",
    "Melancholy",
    "Resiliant",
    "Haunted",
    "Eager",
    "Snarky",
    "Vivacious",
    "Dimwit",
    "Genius",
    "Exceptionally talented",
    "Laidback",
    "Hopeless romantic",
    "Bookish",
    "Artistic",
    "Jaded",
    "Unsettlingly handsome",
    "Unfriendly",
    "Effusive",
    "Ostentatious"
  );
  var blood = new Array(
    " ",
    "muggleborn", 
    "pureblood", 
    "half-blood", 
    "squib",
    );
  var quality = new Array(
    " ",
    " ",
    " ",
    "lesbian",
    "pansexual",
    "bisexual",
    "transgender",
    "asexual",
    "non-binary",
    "gay",
    "queer",
    "feminine",
    "masculine",
  );
  var job = new Array(
    "Auror", 
    "theif", 
    "professor", 
    "reporter",
    "quidditch player",
    "Obliviator",
    "dragon wrangler",
    "parent of three",
    "single parent",
    "lighthouse keeper",
    "potion maker",
    "serial monogamist",
    "match-maker",
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
    "werewolf safehouse caretaker",
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
    "historian",
    "food writer",
    "fashion designer",
    "fashion model",
    "tinkerer",
    "vampire researcher",
    "Muggle-Worthy Excuse Commitee member",
    "Wizengamot Elder",
    "actor",
    "Wizarding Wireless Network host",
    "Gringotts employee",
    "line cook",
    "Floo Network chimney sweep",
    "healer's apprentice",
    "hedge witch",
    "centaur liason",
    "Ministry translator",
    "muggle culture consultant",
    "Herbology professor",
    "painter",
    "single parent",
    "bartender",
    "Firewiskey maker",
    "owl post keeper",
    "Daily Prophet reporter",
    "photographer",
    "magizoologist",
    "artificer",
    "enchanter",
    "spell maker",
    "archivist",
    "musician",
    "Wizarding Wireless producer",
    "town gossip",
    "Hogsmeade village idiot",
    "tea house owner",
    "private magical tutor",
    "Knight Bus conductor",
    "Hogwarts Express trolley pusher",
    "Hogwarts groundskeeper",
    "mandrake farmer",
    "grocer",
    "university student",
    "Quidditch coach",
    "Auror trainee",
    "terrorist",
    "gillyweed dealer",
    "owl keeper",
    "broomstick maker",
    "spell inventor",
    "coroner/necromancer",
    "oracle",
    "Seer",
    "vampire rights activist",
    "farmer",
    "author",
    "travel writer",
    "confectioner",
    "restreanteur",
    "actor",
    "monk",
  );
  var from = new Array(
    "a large family", 
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
    "a haunted family",
    "a long line of frauds and criminals",
    "who-knows-where",
    "a defunct circus caravan",
    "family of insufferable blowhards",
    "a dragon ranch",
    "a poor background",
    "Ottery St. Catchpole",
    "a dense thicket in Wales",
    "aristocracy",
    "a once important family",
    "Brazil",
    "an idyllic childhood",
    "a long line of Quidditch champions",
    "nowhere special",
    "a small town in the Swiss Alps",
    "a picturesque seaside town",
    "New York City",
    "a long line of completely sane criminals",
    "perpetually concerned family",
    "a traditional Korean family",
    "a strict family",
    "nowhere in particular",
    "a horrible family",
    "a long line of Aurors",
    "the right side of the tracks",
    "the wrong side of the tracks",
    "a mish-mash of cultures",
    "academia",
    "the moon (for all anyone knows)",
    "Little Whinging, Surry",
    "a windy hilltop",
    "a big loving family",
    "beautiful Lancashire",
    "an actual castle",
    "nowhere good",
    "a diaster of their own making",
    "Romania",
  );
  var fact = new Array(
    "can't seem to shut up", 
    "has vivid visions", 
    "can use magic but doesn't",
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
    "is obsessed with death",
    "talks to animals",
    "refers to themselves in the third person",
    "started their own business",
    "was raised by centaurs",
    "who has a penchant for the dramatic",
    "is estranged from their family",
    "is always talking about their novel",
    "loves dispensing wisdom",
    "has been deafened by a mandrake",
    "can't remember childhood",
    "walks with a limp",
    "wears too much jewelry",
    "attracts ghosts",
    "claims to be related to the Potters",
    "has managed to make a horcrux",
    "regrets literally everything",
    "has many acquaintences but no true friends",
    "learned why it's bad to meet your hero",
    "had a near death experience",
    "is a Metamorphmagus",
    "breaks into song at the drop of a hat",
    "is always falling in love",
    "hates their father",
    "has a proper fan club",
    "is afraid of magic",
    "plays in a band",
    "parties like there's no tomorrow",
    "is a tea connosieur",
    "is covered in floral tattoos",
    "has a little bird living under their hat",
    "wishes nothing more than to avoid the Ministry and find a partner in petty, low-risk crime",
    "is about as deadly as a cranberry muffin",
    "has never minded their own business in their life",
    "always seems tired",
    "wears sunglasses indoors",
    "will try to murder you",
    "often wears mesh shirts",
    "is chasing some kind of meaning in life",
    "is known for absolutely garish sweaters",
    "dabbles in death",
    "has a false eye",
    "lost a limb in a Splinching",
    "will never go back home",
    "is always up for a drink",
    "dreams of being famous on the WWN",
    "bartered away something important",
    "runs a home for freed House Elves",
    "advocates for better squib inclusion",
    "spends every day atoning for a past wrong",
    "is searching for their family",
    "almost married their cousin",
    "is keenly interested in soil",
    "thinks a little pain never hurt anyone",
    "cares for stray cats",
    "has a great potions garden",
    "teaches kids' broomstick flying in their free time",
    "time-travelled accidentally",
    "can speak Centaur",
    "saw a horrible murder",
    "basically raised their siblings",
    "tutors Gobbledegook",
    "likes crossword puzzles",
    "is really good at chess",
    "has stalked the Minister of Magic",
  );
  
  randomTrait = trait[Math.floor( Math.random() * trait.length)];
  randomBlood = blood[Math.floor( Math.random() * blood.length)];
  randomQuality = quality[Math.floor( Math.random() * quality.length)];
  randomJob = job[Math.floor( Math.random() * job.length)];
  randomFrom = from[Math.floor( Math.random() * from.length)];
  randomFact = fact[Math.floor( Math.random() * fact.length)];
  
  $('#trait').text(randomTrait);
  $('#blood').text(randomBlood);
  $('#quality').text(randomQuality);
  $('#job').text(randomJob);
  $('#from').text(randomFrom);
  $('#fact').text(randomFact);

  $("#refresh").click(function(){
    location.reload(true);
  });
  
})
