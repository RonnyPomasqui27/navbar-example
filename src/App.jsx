import './styles/App.css'
import Profile from './components/Profile'
import Options from './components/Options'
import Items from './components/Items'
import Icons from './components/Icons'

function App() {

  return (
    <>
      <main className='nav_container'>
        <section className='first_form'>
          <Items />
          <h2 className='txt_h2'>facebook</h2>
          <Profile />
          <div className="row2"></div>
          <h2 className='txt_h3'>MENU</h2>
          <Options />
        </section>
        <section className='second_form'>
          <Icons />
        </section>
      </main>
    </>
  )
}

export default App
