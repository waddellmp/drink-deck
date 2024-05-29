<script setup lang="ts">
import { Form, useForm } from 'vee-validate';
import { z } from 'zod';
import { toTypedSchema } from '@vee-validate/zod';

interface FormState {
  username: string;
  password: string;
}

const { defineField, meta, errors } = useForm<FormState>({
  validationSchema: toTypedSchema(
    z.object({
      username: z.string().email(),
      password: z.string().min(6)
    })
  )
});

const [username, usernameAttrs] = defineField('username');
const [password, passwordAttrs] = defineField('password');
</script>

<template>
  <main>
    <div class="container max-w-full grid place-items-center">
      <section id="login-view">
        <div class="card card-compact w-96 bg-base-100 shadow-xl p-8">
          <h1>Welcome back</h1>
          <Form role="form" novalidate>
            <fieldset class="flex flex-col gap-y-8">
              <div>
                <label class="input input-bordered flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                    class="w-4 h-4 opacity-70">
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input type="text" class="grow" placeholder="Username" v-model="username" v-bind="usernameAttrs" />
                </label>
                <div v-if="meta.touched && errors.username" class="text-error">
                  {{ errors.username }}
                </div>
              </div>
              <div>
                <label class="input input-bordered flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                    class="w-4 h-4 opacity-70">
                    <path fill-rule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clip-rule="evenodd" />
                  </svg>
                  <input type="password" class="grow" v-model="password" v-bind="passwordAttrs" />
                </label>
                <span v-if="meta.touched && errors.password" class="text-error">{{
                  errors.password
                  }}</span>
              </div>
              <div class="flex gap-4">
                <button :disabled="!meta.touched" class="btn btn-primary grow" type="submit">
                  Login
                </button>
                <button class="btn btn-secondary grow" type="reset">Create Account</button>
              </div>
              <a href="#" class="link">Forgot password?</a>
            </fieldset>
          </Form>
        </div>
      </section>
    </div>
  </main>
</template>

<style>
fieldset {
  border: none;
}
</style>
