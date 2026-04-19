import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  const characters = [
    {
      name: 'Sean Diaz',
      role: 'Protagonist',
      description: 'A 16-year-old boy who must protect his younger brother Daniel after a tragic incident. Sean is resourceful, protective, and must make difficult moral choices to survive.',
      image: './sean-diaz.jpg'
    },
    {
      name: 'Daniel Diaz',
      role: 'Protagonist',
      description: 'Sean\'s 9-year-old brother who possesses telekinetic powers. Innocent and impressionable, Daniel\'s actions are shaped by Sean\'s choices and guidance.',
      image: './daniel-diaz.jpg'
    }
  ]

  const episodes = [
    {
      number: 1,
      title: 'Roads',
      description: 'The journey begins when a tragic incident forces brothers Sean and Daniel to flee their home. They must survive on the run with Daniel\'s newly discovered telekinetic powers.'
    },
    {
      number: 2,
      title: 'Rules',
      description: 'As the brothers travel, they learn to navigate their new life. Sean must establish rules to keep Daniel safe and in control of his powers.'
    },
    {
      number: 3,
      title: 'Wastelands',
      description: 'The brothers face new challenges and meet new people. Trust becomes a precious commodity as they continue their journey south.'
    },
    {
      number: 4,
      title: 'Faith',
      description: 'Tested by hardship and betrayal, the brothers must decide what they believe in. Their bond is pushed to its limits.'
    },
    {
      number: 5,
      title: 'Wolves',
      description: 'The final episode brings the brothers\' journey to its conclusion. Every choice made along the way determines their fate.'
    }
  ]

  const getEpisodeImage = (number) => {
    const images = {
      1: '/episode1.jpg',
      2: '/episode2.png',
      3: '/episode3.png',
      4: '/episode4.jpg',
      5: '/episode5.png'
    }
    return images[number]
  }

  const endings = [
    {
      title: 'Redemption Ending',
      morality: 'High Morality',
      description: 'Sean turns himself in to the police, allowing Daniel to have a normal life with a foster family. Sean faces prison but finds redemption knowing his brother is safe.',
      image: './ending1.jpg'
    },
    {
      title: 'Blood Brothers Ending',
      morality: 'High Morality',
      description: 'Sean and Daniel escape to Mexico together, leaving their past behind. They start a new life together, stronger than ever.',
      image: './ending2.jpg'
    },
    {
      title: 'Parting Ways Ending',
      morality: 'Low Morality',
      description: 'Sean and Daniel separate at the border. Daniel is taken by authorities while Sean escapes, haunted by the choices they made.',
      image: './ending3.jpg'
    },
    {
      title: 'Tragic Ending',
      morality: 'Low Morality',
      description: 'Sean dies protecting Daniel at the border. Daniel is left alone to face an uncertain future, a tragic conclusion to their journey.',
      image: './ending4.jpg'
    }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="./lis2-nav-logo.png" alt="Life is Strange 2" className="logo-img" />
          </div>
          <ul className="nav-menu">
            <li><a href="#home" onClick={() => setActiveTab('overview')}>Home</a></li>
            <li><a href="#story" onClick={() => setActiveTab('story')}>Story</a></li>
            <li><a href="#characters" onClick={() => setActiveTab('characters')}>Characters</a></li>
            <li><a href="#episodes" onClick={() => setActiveTab('episodes')}>Episodes</a></li>
            <li><a href="#endings" onClick={() => setActiveTab('endings')}>Endings</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image-container">
          <img src="./lis2-hero.jpg" alt="Life is Strange 2" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Life is Strange 2</h1>
          <p>A Journey of Brotherhood, Survival, and Choice</p>
          <p className="hero-subtitle">Every choice matters. Every moment counts.</p>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="section overview-section">
        <div className="container">
          <h2>Welcome to the Road</h2>
          <div className="logo-section">
            <img src="./lis2-logo.png" alt="Life is Strange 2 Logo" className="section-logo" />
          </div>
          <p className="section-intro">
            Life is Strange 2 follows brothers Sean and Daniel Diaz as they flee across America after a tragic incident. 
            With Daniel possessing mysterious telekinetic powers, the brothers must navigate a dangerous world while making 
            choices that will determine their fate and the fate of those they meet along the way.
          </p>
          
          <div className="overview-grid">
            <div className="overview-card">
              <div className="card-icon">👨‍👦</div>
              <h3>Brotherhood</h3>
              <p>The core of the story is the bond between Sean and Daniel. Every decision Sean makes affects Daniel's development and their relationship.</p>
            </div>
            <div className="overview-card">
              <div className="card-icon">⚡</div>
              <h3>Telekinetic Powers</h3>
              <p>Daniel possesses extraordinary telekinetic abilities that grow stronger throughout the game. Sean must help Daniel learn to control them.</p>
            </div>
            <div className="overview-card">
              <div className="card-icon">🛣️</div>
              <h3>Cross-Country Journey</h3>
              <p>Travel across America from Seattle to Mexico, meeting diverse characters and facing moral dilemmas at every turn.</p>
            </div>
            <div className="overview-card">
              <div className="card-icon">🎭</div>
              <h3>Moral Choices</h3>
              <p>Your decisions shape not only the brothers' journey but also influence the people they encounter and the world around them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="section story-section">
        <div className="container">
          <h2>The Story</h2>
          <p className="section-intro">A tale of survival, brotherhood, and impossible choices</p>
          
          <div className="story-content">
            <div className="story-card">
              <h3>The Incident</h3>
              <p>
                Life is Strange 2 begins in Seattle with a tragic incident that forces brothers Sean and Daniel Diaz to flee their home. 
                What starts as a desperate escape becomes a cross-country journey filled with danger, mystery, and moral complexity. 
                The brothers must survive on their own, relying on each other as their only family.
              </p>
            </div>
            
            <div className="story-card">
              <h3>The Power</h3>
              <p>
                As the brothers flee, Daniel's extraordinary ability manifests: telekinesis. This power becomes both a blessing and a curse, 
                offering protection but also drawing unwanted attention. Sean must guide Daniel in learning to control these abilities while 
                keeping him safe from those who would exploit him.
              </p>
            </div>
            
            <div className="story-card">
              <h3>The Journey</h3>
              <p>
                From the forests of Oregon to the deserts of Arizona, the brothers travel south toward Mexico, hoping to find safety and a new life. 
                Along the way, they meet diverse characters—some helpful, some dangerous—and face situations that test their morality and bond.
              </p>
            </div>
            
            <div className="story-card">
              <h3>The Choices</h3>
              <p>
                Every decision Sean makes has consequences that ripple throughout the story. Whether to trust strangers, how to use Daniel's powers, 
                and what values to instill in his brother—these choices determine not only their fate but the fate of everyone they encounter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="section characters-section">
        <div className="container">
          <h2>Main Characters</h2>
          <p className="section-intro">Meet the unforgettable characters of Life is Strange 2</p>
          
          <div className="characters-grid">
            {characters.map((character, index) => (
              <div key={index} className="character-card">
                <div className="character-image">
                  <img src={character.image} alt={character.name} />
                </div>
                <div className="character-info">
                  <h3>{character.name}</h3>
                  <p className="character-role">{character.role}</p>
                  <p className="character-description">{character.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section id="episodes" className="section episodes-section">
        <div className="container">
          <h2>Episodes</h2>
          <p className="section-intro">Explore all 5 episodes of Life is Strange 2</p>
          
          <div className="episodes-grid">
            <div className="episode-card">
              <div className="episode-image-container">
                <img src="/episode1.jpg" alt="Roads" className="episode-image" />
              </div>
              <div className="episode-header">
                <div className="episode-number-circle">
                  <span className="number">1</span>
                </div>
                <h3>Roads</h3>
              </div>
              <div className="episode-content">
                <p>The journey begins when a tragic incident forces brothers Sean and Daniel to flee their home. They must survive on the run with Daniel's newly discovered telekinetic powers.</p>
              </div>
            </div>
            <div className="episode-card">
              <div className="episode-image-container">
                <img src="/episode2.png" alt="Rules" className="episode-image" />
              </div>
              <div className="episode-header">
                <div className="episode-number-circle">
                  <span className="number">2</span>
                </div>
                <h3>Rules</h3>
              </div>
              <div className="episode-content">
                <p>As the brothers travel, they learn to navigate their new life. Sean must establish rules to keep Daniel safe and in control of his powers.</p>
              </div>
            </div>
            <div className="episode-card">
              <div className="episode-image-container">
                <img src="/episode3.png" alt="Wastelands" className="episode-image" />
              </div>
              <div className="episode-header">
                <div className="episode-number-circle">
                  <span className="number">3</span>
                </div>
                <h3>Wastelands</h3>
              </div>
              <div className="episode-content">
                <p>The brothers face new challenges and meet new people. Trust becomes a precious commodity as they continue their journey south.</p>
              </div>
            </div>
            <div className="episode-card">
              <div className="episode-image-container">
                <img src="/episode4.jpg" alt="Faith" className="episode-image" />
              </div>
              <div className="episode-header">
                <div className="episode-number-circle">
                  <span className="number">4</span>
                </div>
                <h3>Faith</h3>
              </div>
              <div className="episode-content">
                <p>Tested by hardship and betrayal, the brothers must decide what they believe in. Their bond is pushed to its limits.</p>
              </div>
            </div>
            <div className="episode-card">
              <div className="episode-image-container">
                <img src="/episode5.png" alt="Wolves" className="episode-image" />
              </div>
              <div className="episode-header">
                <div className="episode-number-circle">
                  <span className="number">5</span>
                </div>
                <h3>Wolves</h3>
              </div>
              <div className="episode-content">
                <p>The final episode brings the brothers' journey to its conclusion. Every choice made along the way determines their fate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Endings Section */}
      <section id="endings" className="section endings-section">
        <div className="container">
          <h2>All Endings</h2>
          <p className="section-intro">Discover the different paths and endings of Life is Strange 2</p>
          
          <div className="endings-grid">
            {endings.map((ending, index) => (
              <div key={index} className="ending-card">
                <div className="ending-image-container">
                  <img src={ending.image} alt={ending.title} className="ending-image" />
                </div>
                <div className="ending-content">
                  <h3>{ending.title}</h3>
                  <p className="ending-morality">{ending.morality}</p>
                  <p className="ending-description">{ending.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Project Only</p>
          <p>Life is Strange 2 is a trademark of Square Enix and Dontnod Entertainment.</p>
          <div className="social-links">
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Discord</a>
            <a href="#" className="social-link">Reddit</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
