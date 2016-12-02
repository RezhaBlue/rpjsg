# rpjsg
This is an effort to create a simple rpg in js based on pokemon mechanics

Tasks left to be completed (displayed in relative chains):

Finish Implementing Bag Module:

<+> Implement Add, Remove, Move, and Sort Items in respective Category List in Bag: 

    <-> changes should be reflected and permanent in var bag and in resulting html

<+> Implement Exiting Bag Module:

    <-> again, all changes before leaving should be saved without prompt

( ! ) Future Implementation: use function and hold function for team
      <*> Keep in mind later implementation of bag must be simultaneously accessible with team to easily move/use items to and from team
  

Implement Item Class:

<-> Create necesssary base classes and interfaces to create an Item Class

<-> Consults PokeAPI for more on Item Properties (also see: http://pokeapi.co/docsv2/#items-section)

<-> Consult Bulbapedia for more on Item Architecture (http://bulbapedia.bulbagarden.net/wiki/Item_data_structure_in_Generation_III)

<-> Replace hard coded String items in var bag with items of respective classes


Implement Pokemon Class:

<-> Similar approach to Items but many more layers of details


Implement Player:

<-> Create necesssary base classes and interfaces to create an Item Class

    <*> Player HAS-A Team, Player HAS-A bag, Player HAS-A Pokedex (might get away with keeping latter as separate global object).
  

Implement team:

  <-> Same functions as Bag but structure is one list with 6 items max
  
    <*> Keep in mind later implementations of team must be simultaneously accessible with bag to easily move/use items to and from team
  
    <*> Should eventually be accessible via menu


Implement PC:

  <-> Similar to team in function except cannot be called into battle or accessed from menu.
  
  <-> Large Scale: no max limit (consider 1000 hard limit if needed).


Implement Pokedex Module:

<+> Implement scrolling, sorting, searching, and selecting pokemon in Pokedex List:

    <-> Similar function and structure to Category lists in bag


Implement Navigation:

<+> Need to build levels/maps and ways to traverse

<+> Implement monster encounters


Implement Combat:

<+> Turn based with simplified equations


Implement Event encounters:

<+> Should be able to discover items and interact with NPCs


[...] Implement Options Module:

<+> Allow users to configure UI styling:

    <*> IGNORE FOR NOW
