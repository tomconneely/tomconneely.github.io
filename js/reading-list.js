var ReadingListViewModel = function() {
    var self = this;

    this.books = ko.observableArray(["Book 1", "Book 2"]);
};

ko.applyBindings(new ReadingListViewModel());

var BOOK_TYPE = {
    PHYSICAL: 'physical',
    EBOOK: 'ebook',
    AUDIOBOOK: 'audiobook'
};

var books = [];
books.push({
    title: "Dreamland: The True Tale of America's Opiate Epidemic",
    author: "Sam Quinones",
    isbn: "978-1-62040-252-8",
    year_read: 2018,
    book_type: BOOK_TYPE.PHYSICAL,
    goodreads_link: "https://www.goodreads.com/book/show/22529381-dreamland",
    amazon_link: "https://www.amazon.com/Dreamland-True-Americas-Opiate-Epidemic-ebook/dp/B00U19DTS0/ref=sr_1_1?ie=UTF8&qid=1516904432&sr=8-1&keywords=sam+quinones",
    passages: [
        {
            text: "<p>By the time I began research for this book in 2012, we had, I believe, spent decades destroying community in America, mocking and clawing at the girdings of the government that provide the public assets and infrastructure that we took for granted and that make communal public life possible. Meanwhile, we exalted the private sector. We beat Communism and thus came to believe the free market was some infallible God. Accepting this economic dogma, we allowed, encouraged even, jobs to go overseas. We lavishly rewarded our priests of finance for pushing those jobs offshore. We demanded perfection from government and forgave the private sector its trespasses.</p><p>Part of the private sector developed a sense of welfare entitlement. Certainly, in this opiate scourge, it is the private sector has taken the profits; the costs of dealing with the vast collateral damage have fallen to the public sector. A couple months after this book's publication, <i>Forbes</i> counted the Sackler family, and Raymond Sackler, the last remaining of the brothers, as the richest newcomer to the magazine's list of \"America's Richest Families\" - with an estimated net worth of $14 billion. All of that was due to sales of OxyContin, which the magazine estimated at $35 billion since the drug's release in 1996.</p><p>We seemed to fear the public sphere. Parents hovered over kids> Alarmed at some menace out in public, they accompanied their kids everywhere they went. In one case, a couple was actually charged with allowing their nine-year-old daughter and her sister go to the park alone. The term \"free-range parenting\" was coined to describe the daring parents who let their kids out of their sight. No wonder so many kids - boys mostly - were diagnosed with ADHD and prescribed Adderall and other drugs. (I wish someone would study the incidence of opiate addiction as teens and young adults of people who as kids were diagnosed with ADHD and prescribed drugs like Adderall.) They spent their lives indoors, cooped up, bouncing off the walls. I can say this because I was one: Boys are like dogs; they need to run and run and run. When I was a boy in suburban Southern California, we spent our entire free time outside playing - football, basketball, riding bikes, or just running around. We probably ran three or four miles a day every day. My knees were in an almost permanent stated of being skinned, with scabs growing and being torn off by my roughhousing. My mother had a bell from her family's farm in Iowa that she used to ring us home at dinnertime - because we were always running around of the house. I've been back to the street when I grew up eight times in the last few years and have yet to see a human being outside. The park where I used to play is always empty. </p><p>Keeping kids cooped up seems to me connected to the idea that we can avoid pain, avoid danger. It doesn’t surprise me to hear that in universities, students, raised indoors on screens, apparently lived in some crystalline terror of any kind of emotional anguish. A 2015 story in the <i>Atlantic</i> called /”The Coddling of the American Mind/” reported on the phenomenon of college students – kids who grew up in the era of hyper-protection from physical pain – demanding to be protected as well from painful ideas. They were demanding professors provide \”trigger warnings\” in advance of ideas that might provoke a strong emotional content – for example, a novel that describes racial violence. This new campus ethos, the authors wrote, \”presumes an extraordinary fragility of the collegiate psyche, and therefore elevates the goal of protecting students from psychological harm. The ultimate aim, it seems, is to turn campuses into ‘safe spaces’ where young adults are shielded from words and ideas that make some uncomfortable.\”</p><p></i>Psychology Today</i> ran a story on \“Declining Student Resilience\” that noticed increased \”neediness\” in college students, that students had called campus police after seeing a mouse, blaming teachers for poor grades, and \”increasingly seeking help for, and apparently having emotional crises over, problems of everyday life.\” Professors, the author continued, \”described an increased tendency to see a poor grade as a reason to complain rather than as reason to study more, or more effectively. Much of the discussions had to do with the amount of handholding faculty should do versus the degree to which the response should be something like ‘Buck up, this is college.’\”</p><p>All of this seems to be the predictable result of the idea that we should be protected from pain at all cost.</p><p>As a country, meanwhile, we acted as if consumption and the accumulation of stuff was the path to happiness. We leave family Thanksgivings to go stand in line to buy products – Xboxes, tablets and the like – that keep us isolated and that poison our kids, and we go do it as if we have no choice in the matter. We have built isolation into our suburbs and called it prosperity. Added to that mix is the expansion of technology that connects us to the world but separates us from our next-door neighbour. </p><p>We wound up dangerously separate from each other – whether in poverty or in affluence. </p><p>Kids no longer play in the street. Parks are underused. Dreamland lies buried beneath a strip mall. </p><p>Why them do we wonder that heroin is everywhere? </p><p>In our isolation, heroin thrives; that’s its natural habitat. And our very search for painlessness led us to it. </p><p>Heroin is, I believe, the final expression of values we have fostered for thirty-five years. It turns every addict into narcissistic, self-absorbed, solitary hyper-consumers. A life that finds opiates turns away from family and community and devotes itself entirely to self-gratification by buying and consuming one product – the drug that makes being alone not just all right, but preferable. </p><p>I believe more strongly than ever that the antidote to heroin is community. If you want to keep kids off heroin, make sure people in your neighbourhood do things together, in public, often. Form your own Dreamland and break down those barriers that keep people isolated. Don’t have play dates; just go out and play. Bring people out of their private rooms, whatever forms those rooms take. We might consider living more simply. Pursuit of stuff doesn’t equal happiness, as any heroin addict will tell you. People in some places I’ve been may emerge from this plague more compassionate, more grounded, willing to give children experience rather than things, and show them that pain is part of life and often endurable. The antidote to heroin may well be making your kids ride bikes outside, with their friends, and let them skin their knees. </p><p>I found the rough beginning of that in the town of Portsmouth, Ohio – much to my surprise and delight. The encouraging signs in Portsmouth I also recently found in the suburbs of northern Kentucky, where pills and heroin have hit hard. </p><p>That’s the good news: We don’t just sit around and take the beating. We act. Like Americans always have. Heroin is fearsome enough to force us into action. What it does to users, their families, and their neighbourhoods is so harrowing that heroin reminds those who live through it of the ties that bind them to others – producing in some places the opposite of the isolation that that produces in users. </p><p>So there are even times when I think I’m right – that perhaps heroin is the most important force for positive change in our country today. </p><p>Anyway, after years of writing about it, that’s what I’d like to hope. And if it is, and for all it has taught us and forced us to recognize about themselves and how we live, as one woman told me, \"we may thank heroin some day.\" </p>",
            pageStart: 351,
            pageEnd: 353
        }
    ]
});

books.push({
    title: "Artemis",
    author: "Andy Weir",
    isbn: "978-0-55344-812-2",
    year_read: 2018,
    book_type: BOOK_TYPE.AUDIOBOOK,
    goodreads_link: "https://www.goodreads.com/book/show/34928122-artemis",
    amazon_link: "https://www.amazon.com/Artemis-Novel-Andy-Weir/dp/0553448129/",
    passages: [
        {
            text: "",
            timestamp: ""
        }
    ]
});

books.push({
    title: "Fantasy Man: A Former NFL Player's Descent into the Brutality of Fantasy Football",
    author: "Nate Jackson",
    isbn: "978-0-06247-008-9",
    year_read: 2018,
    book_type: BOOK_TYPE.AUDIOBOOK,
    goodreads_link: "https://www.goodreads.com/book/show/28820060-killing-peyton",
    amazon_link: "https://www.amazon.com/Fantasy-Man-Players-Brutality-Football-ebook/dp/B019WVTM6K/ref=sr_1_2?ie=UTF8&qid=1516904349&sr=8-2&keywords=nate+jackson",
    passages: [
        {
            text: "",
            timestamp: ""
        }
    ]
});

books.push({
    title: "Sorted!",
    author: "John McGuire",
    isbn: "978-1-84488-241-0",
    year_read: 2018,
    book_type: BOOK_TYPE.PHYSICAL,
    goodreads_link: "https://www.goodreads.com/book/show/17690336-sorted"
});

books.push({
    title: "Lock In",
    author: "John Scalzi",
    isbn: "978-0-76537-586-5",
    year_read: 2018,
    book_type: BOOK_TYPE.PHYSICAL,
    goodreads_link: "https://www.goodreads.com/book/show/21418013-lock-in",
    amazon_link: "https://www.amazon.com/Lock-Novel-Future-John-Scalzi/dp/076538132X/"
});

books.push({
    title: "Disrupted: Ludicrous Misadventures in the Tech Start-Up Bubble",
    author: "Dan Lyons",
    isbn: "978-1-7864910-2-2",
    year_read: 2018,
    book_type: BOOK_TYPE.PHYSICAL,
    goodreads_link: "",
    amazon_link: "",
    passages : [
        {
            text: "<p>... But I fear that customers employees and being naive about the peoplethey're working for and doing business with. HubSpot has nineteen thousand customers. Those companies entrust their private data to HubSpot, things like emails, customer lists, pricing and billing. HubSpot holds data not just about its own nineteen thousand customers but from <i>their</i> customers as well. If your plumber or pool installer or local appliance store uses HubSpot software, HubSpot may be holding information about you, without you even knowing it.</p><p>This is a company where top executives allegedly engaged in a scheme to invade the privacy of a former employee and did something so serious that the FBI investigated. Despite that, those marketers cheering for Halligan at the InBound conference somehow believe they can trust his company with their data.</p><p>The thing is, we all do this. We share our information with companies all the time. We send email through Google and Microsoft. We store files on DropBox. We shop on Amazon. We buy apps and music from Apple. We hire drivers through Uber, and rent apartments from Airbnb. Companies use Workday for HR, Zendesk for customer service, Salesforce.com for customer tracking, Slack for messaging, and on and on. Most companies don't operate their own data centres. Instead, they rent server and storage space from a hosting company like Amazon. Our information get distributed around the globe, zipped between data centres at the speed of light, stashed on hard drives, backed up duplicated, replicated, sliced and diced, sold and shared. Even the people who supposedly manage our data have no idea where it all resides or who has access to it.</p><p>Yet we go along. We convice ourslevs that nothing bad will happen. We tell ourselves that we're not important enough for anyone for anyone to spy on us, or that even if someone did want to spy on us, there must be safeguards in place that prevent bad people from snooping. We hear the people who run these online services present themselves as idealistic do-gooders who want to make the world a better place.</p><p>Even if we don't believe that do-gooder hoo-ha, we may at least understand that these people have a financial incentive not to spy on us. They don't have to be good people, or honest people, or law-abiding citizens. They just have to realize that it's in their own best interests not to snoop on customers. Their business relies on people trusting them. Their own greed will keep them honest - that's the theory anyway.</p><p>So we figure we're safe. We assume that the people who run online services won't spy on us. I used to believe that. I don't anymore. Halligan, Volpe, and Chernov were not random nerds going rogue in some data center. They were top executives of a publicly traded company. They're the ones who were supposed to be keeping an eye on the others. During my time at HubSpot, I was shocked to see how badly managed the company was and how packs of inexperienced twenty-something employees were being turned loose and given huge responsibility with little or no oversight. In a world of start-ups that is now the norm, not the exception.</p><p>The consequences are just what you would expect. Employees at Uber, the ride sharing company, have used a \"God View\" feature to stalk people using the service, including a BuzzFeed journalist. Re/code, a tech blog, claims other comapnies have done the same, including Lyft, a rival to Uber; Swipe, a photo-sharing app; and Basis, which makes a \"health watch\" that tracks people's heart rates, sleep patterns, and other personal information. In the early days at Facebook, the young employees had a master password to gain access to anyone's account, according to a book by a formaer Facebook employee. Dirty tricks have become par for the course at these places. In 2011 Facebook was caught running a sneaky smear campaign, hiring a PR firm to spread negative stories about Google - I know because I'm the reporter who caught them and broke the story for <i>Newsweek</i>. Facebook's entire business model is based on mining personal data in order to deliver targeted advertising. The same goes for Google and countless other online companies. We have no idea who has access to what.</p><p>We also have no choice but to go along. None of us is going to opt out of using the Internet. Nor can we expect that the companies will do any better when it comes to oversight. They're funded by venture capitalists who seek only the biggest and quickest return on their investment. That means hiring kids, cutting corners, breaking rules. It does not mean investing loads of money in order to build safeguards and protect users. There's the adage in Silicon Valley that people who use online services are not the customers. We're the product. As far as companies in Silicon Valley are concerned, we exist solely to be packaged up and sold to advertisers. We should not expect these companies to look out for us.</p>",
            page_start: 255,
            page_end: 258
        }
    ]
});

books.push({
    title: "Trumpocracy: The Corruption of the American Republic",
    author: "David Frum",
    isbn: "9780062796752",
    year_read: 2018,
    book_type: BOOK_TYPE.AUDIOBOOK,
    goodreads_link: "https://www.goodreads.com/book/show/35068859-trumpocracy",
    amazon_link: "https://www.amazon.com/Trumpocracy-Corruption-American-David-Frum/dp/0062796739",
    passages : [
    ]
});

books.push({
    title: "10% Happier: How I Tamed the Voice in My Head, Reduced Stress Without Losing My Edge, and Found Self-Help That Actually Works",
    author: "Dan Harris",
    isbn: "9781444799040",
    year_read: 2018,
    book_type: BOOK_TYPE.PHYSICAL,
    goodreads_link: "https://www.goodreads.com/book/show/24783767-10-happier",
    amazon_link: "https://www.amazon.com/10-Happier-Self-Help-Actually-Works/dp/0062265431/",
    passages : [
    ]
});

books.push({
    title: "World Without Mind: The Existential Threat of Big Tech",
    author: "Franklin Foer",
    isbn: "9781787330283",
    year_read: 2018,
    book_type: BOOK_TYPE.PHYSICAL,
    goodreads_link: "https://www.goodreads.com/book/show/34311003-world-without-mind",
    amazon_link: "https://www.amazon.com/gp/product/1787330281/",
    passages : [
    ]
});

books.push({
    title: "The King of Big Air",
    author: "Joseph Babcock",
    isbn: "9781489031747",
    year_read: 2018,
    book_type: BOOK_TYPE.PHYSICAL,
    goodreads_link: "https://www.goodreads.com/book/show/18192829-the-king-of-big-air",
    amazon_link: "",
    passages : [
    ]
});

books.push({
    title: "",
    author: "",
    isbn: "",
    year_read: 2018,
    book_type: BOOK_TYPE.PHYSICAL,
    goodreads_link: "",
    amazon_link: "",
    passages : [
    ]
});