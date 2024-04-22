'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../../supabase/server'



export async function login(email, password) {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  const data = {
  email: email,
  password: password,
}
const { error } = await supabase.auth.signInWithPassword(data);
console.log("error: " + error);
  if (error) {
    redirect('/error')
  }
  revalidatePath('/', 'layout')
  redirect('/pages/profile')
}


export async function updateUser(email, password, phone) {
  const supabase = createClient()
  const data = {
    email: email,
    password: password,   
  }
  const { error } = await supabase.auth.update(data);
  if (error) {
    redirect('/error')
  }
  revalidatePath('/', 'layout')
  redirect('/')
  
}

export async function signup(email, password) {
  console.log("email: " + email + " password: " + password);
  const supabase = createClient()
  const data = {
    email: email,
    password: password,
  }
  const { error } = await supabase.auth.signUp(data);
  if (error) {
    redirect('/error')
  }
  revalidatePath('/', 'layout')
  redirect('/')
}

export async function logout() {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut();
  if (error) {
    redirect('/error')
  }
  revalidatePath('/', 'layout')
  redirect('/')
}

export async function fetchReddits() {
  const supabase = createClient()
  let { data: reddits, error } = await supabase
  .from('reddits')
  .select('*')
  return reddits
}