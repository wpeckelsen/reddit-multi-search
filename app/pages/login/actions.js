'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


import { createClient } from '../../supabase/server'

export async function login(formData) {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// const { data, error } = await supabase.auth.signInWithPassword({
//   email: formData.get('email'),
//     password: formData.get('password'),
// })

//   // const { error } = await supabase.auth.signInWithPassword(data)
//   // const {error} = (await supabase).auth.signInWithPassword(data);

//   if (error) {
//     redirect('/error')
//   }

//   revalidatePath('/', 'layout')
//   redirect('/pages/profile')
// }




const data = {
  email: formData.get('email'),
  password: formData.get('password'),
}

const { error } = await supabase.auth.signInWithPassword(data);


  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/pages/profile')
}






export async function signup(formData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { error } = await supabase.auth.signUp(data);
  // const {error} = (await supabase).auth.signUp(data);

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}