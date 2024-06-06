'use server';

// default
import { cookies } from 'next/headers';
// external
import axios from 'axios';

export async function upstoxAuth(code: string) {
  const url = 'https://api.upstox.com/v2/login/authorization/token';
  const data = {
    code: code,
    client_id: process.env.AUTH_UPSTOX_API_KEY,
    client_secret: process.env.AUTH_UPSTOX_API_SECRET,
    redirect_uri: process.env.AUTH_REDIRECT_URI,
    grant_type: 'authorization_code',
  };

  try {
    const res = await axios.post(url, data, {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const accessToken = await res.data?.access_token;
    if (accessToken) {
      cookies().set('upstoxAccessToken', accessToken);
      return true;
    }
  } catch (err) {
    console.error(err);
  }
}
