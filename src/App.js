import { useState } from 'react'
import Button from './components/button'
import Input from './components/input'
import Card from './components/card'

const list = [
  {
    title: 'Title 1',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi et assumenda quibusdam voluptate deleniti soluta quam blanditiis esse aperiam molestias vel sed eius suscipit neque voluptas corporis.',
  },
  {
    title: 'Title 2',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi et assumenda quibusdam voluptate deleniti soluta quam blanditiis esse aperiam molestias vel sed eius suscipit neque voluptas corporis.',
  },
  {
    title: 'Title 3',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi et assumenda quibusdam voluptate deleniti soluta quam blanditiis esse aperiam molestias vel sed eius suscipit neque voluptas corporis.',
  },
  {
    title: 'Title 4',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi et assumenda quibusdam voluptate deleniti soluta quam blanditiis esse aperiam molestias vel sed eius suscipit neque voluptas corporis.',
  },
  {
    title: 'Title 5',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi et assumenda quibusdam voluptate deleniti soluta quam blanditiis esse aperiam molestias vel sed eius suscipit neque voluptas corporis.',
  },
  {
    title: 'Title 6',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi et assumenda quibusdam voluptate deleniti soluta quam blanditiis esse aperiam molestias vel sed eius suscipit neque voluptas corporis.',
  },
  {
    title: 'Title 7',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi et assumenda quibusdam voluptate deleniti soluta quam blanditiis esse aperiam molestias vel sed eius suscipit neque voluptas corporis.',
  },
  {
    title: 'Title 8',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi et assumenda quibusdam voluptate deleniti soluta quam blanditiis esse aperiam molestias vel sed eius suscipit neque voluptas corporis.',
  },
  
]

function App() {

  return (
    <div className='h-full w-full bg-slate-200'>
      <main className='w-full h-screen xl:w-[1000px] mx-auto bg-slate-100 shadow-lg shadow-slate-200'>
        <section className='p-4 grid grid-cols-4 gap-2'>
          {list.map(o => (
            <Card>
              <Card.Title>{o.title}</Card.Title>
              <Card.Body>{o.description}</Card.Body>
              <Card.Footer>
                <Button>Action</Button>
                <Button>Action</Button>
              </Card.Footer>
            </Card>
          ))}          
        </section>
      </main>
    </div>
  );
}

export default App;
