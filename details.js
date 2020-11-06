const data = [
  {id: 1, title: 'The Life Aquatic with Steve Zissou', content: 'The Life Aquatic with Steve Zissou is a 2004 American comedy-drama film written by Wes Anderson and Noah Baumbach and directed by Anderson. It is Anderson&#39s fourth feature-length film and was released in the United States on December 25, 2004.', image: 'real-belafonte.png' },
  {id: 2, title: 'The Sauna', content: 'The sauna, was designed by an engineer from the Chinese Space Program, and we keep a Sweedish masseusse on staff.', image: 'sauna.png', quote: '-Steve Zissou' },
  {id: 3, title: 'The Science Lab', content: 'Here&#39s where we do all our different science projects and experiments and so on.', image: 'science-lab.png', quote: '-Steve Zissou' },
  {id: 4, title: 'The Kitchen', content: 'This is the kitchen, which contains probably some of the most technologically advanced equipment on the ship.', image: 'kitchen.png', quote: '-Steve Zissou' },
  {id: 5, title: 'The Research Library', content: 'Eleanor put together a top-notch research library for us, with a complete first-edition set of The Life Aquatic Companion Series.', image: 'research-library.png', quote: '-Steve Zissou' },
  {id: 6, title: 'The Cutting Room', content: 'We process our own rushes and keep a cutting room on board so we can do an assembly while we&#39re shooting.', image: 'cutting-room.png', quote: '-Steve Zissou' },
  {id: 7, title: 'The Observation Bubble', content: 'This is the observation bubble, which I thought up in a dream, actually.', image: 'observation-bubble.png', quote: '-Steve Zissou' },
  {id: 8, title: 'Albino Scouts', content: 'Two albino scouts swim with the ship. They&#39re supposedly very intelligent, although I&#39ve never seen any evidence of it.', image: 'albino-dolphins.png', quote: '-Steve Zissou' },
  {id: 9, title: 'The Engine Room', content: 'Here&#39s the engine room. The bearing casings aren&apost supposed to look like that, but we can&#39t afford to fix them this year.', image: 'engine-room.png', quote: '-Steve Zissou' },
  {id: 10, title: 'Topside', content: 'Topside we&#39ve got the bridge, the minisub, an old chopper and all kinds of radar and sonar and underwater movie gadgets.', image: 'topdeck.png', quote: '-Steve Zissou' }
]

const list = () => {
  return [...data] 
}; 

const find = (id) => {
  const post = data.find(post => post.id === +id);
  return {...post}; 
}

module.exports = { list: list, find: find };