import {
    IconLookup,
    IconDefinition,
    findIconDefinition
  } from '@fortawesome/fontawesome-svg-core'
  
  const coffeeLookup: IconLookup = { prefix: 'fas', iconName: 'coffee' }
  const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup)
  
  // ...
  
  export class App extends React.Component {
    render() {
      return (
        <div className="App">
          <h1>
            <FontAwesomeIcon icon={coffeeIconDefinition} />
          </h1>
        </div>
      )
    }
  } 