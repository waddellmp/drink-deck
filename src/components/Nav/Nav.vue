<script setup lang="ts">
import { onKeyDown } from '@vueuse/core';
import type { Component, VueElement } from 'vue';

defineProps<{
  Content: Component;
  navItems: {
    id: string;
    label: string;
    path: string;
  }[];
}>();
</script>

<template>
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="w-full navbar">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2">
          <div class="navbar bg-base-100">
            <div class="navbar-start">
              <router-link to="/" class="btn btn-ghost text-xl">DrinkDeck</router-link>
            </div>
            <div class="navbar-end">
              <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                  <!-- <li v-for="item in navItems" :key="item.id">
                    <router-link :to="item.path" class="btn btn-ghost w-full text-sm">{{ item.label }}</router-link>
                  </li> -->
                  <li>
                    <router-link to="/search">Find Drinks</router-link>
                  </li>
                  <li>
                    <details>
                      <summary>Profile</summary>
                      <ul class="p-2">
                        <li>
                          <router-link to="/settings">Settings</router-link>
                        </li>
                        <li>
                          <router-link to="/notifications">Notifications</router-link>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
              <!-- <a class="btn">Button</a> -->
            </div>
          </div>
        </div>
        <!-- <div class="flex-1 px-2 mx-2">Navbar Title</div> -->
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            <li>
              <div>
                <div class="avatar online">
                  <div class="w-12 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- Page content here -->
      <div class="flex">
        <Content class="flex-1" />
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>
