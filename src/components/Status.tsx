import { FormEvent, KeyboardEvent, useState } from 'react'
import { Header } from './Header'
import { Separator } from './Separator'
import './Status.css'
import { Tweet } from './Tweet'
import { PaperPlaneRight } from 'phosphor-react'



export function Status(){
  const [newAnswer, setNewAnswer] = useState('');
  const [answers, setAnswer] = useState([
    'Concordo...',
  'Faz sentido',
  'Parabens pelo progresso'
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswer([newAnswer, ...answers])
    setNewAnswer('')
  }

  console.log('RENDERIZOU')

  function handleHotkeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
    
      setAnswer([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className='status'>
    <Header title="Tweet" />
      <Tweet content={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum necessitatibus doloremque saepe, quisquam cum earum ratione a voluptates quis laboriosam perspiciatis architecto deleniti veritatis hic quaerat ipsa fugiat qui?"}/>
    <form onSubmit={createNewAnswer} className='answer-tweet-form'>
      <label htmlFor="tweet">
        <img src="https://github.com/sanroque.png" alt="Goncalo Sanroque" />
        
        <textarea 
        value={newAnswer} 
        id="tweet" 
        placeholder="Tweet your answer" 
        onKeyDown={handleHotkeySubmit}
        onChange={(event) => {setNewAnswer(event.target.value)}}
        ></textarea>
      </label>
      <button type='submit'>
        <PaperPlaneRight/>
        <span>Answer</span>
        </button>
    </form>

    <Separator />

    {answers.map(answer => {
      return <Tweet key={answer} content={answer} />
    })}

  </main>
  )
  
}