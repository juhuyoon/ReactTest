import React from 'react';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import FriendCard from './components/FriendCard';
import friends from './friends.json';

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {/* The APP is the parent */}
      {/* The FriendCard is the child */}
      <FriendCard
        name={friends[0].name}
        image={friends[0].image}
        occupation={friends[0].occupation}
        location={friends[0].location}
        color="Pink!"
      />
      <FriendCard
        name={friends[1].name}
        image={friends[1].image}
        occupation={friends[1].occupation}
        location={friends[1].location}
        color="Purple!"
      />
      <FriendCard
        name={friends[2].name}
        image={friends[2].image}
        occupation={friends[2].occupation}
        location={friends[2].location}
        color="Orange!"
      />
      <FriendCard
        name={friends[2].name}
        image={friends[2].image}
        occupation={friends[2].occupation}
        location={friends[2].location}
        color="Red!"
      />
      <FriendCard
        name={friends[2].name}
        image={friends[2].image}
        occupation={friends[2].occupation}
        location={friends[2].location}
        color="Blue!"
      />
    </Wrapper>
  );
}

export default App;
