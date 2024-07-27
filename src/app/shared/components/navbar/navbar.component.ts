import { CommonModule } from '@angular/common';
import { ParseFlags } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  items = [
    {
      title: 'Currency',
      expanded: false,
      subItems: [
        {
          title: 'OSRS',
          items: [
            'OSRS',
            'RS3',
            'WoW Classic',
            'WoW Retail',
            'Final Fantasy XIV',
            'Roblox',
            'All',
            '4Story',
            '8 Ball Pool',
            '9 Dragons',
            'Aion Classic',
            'Aion Online',
            'Albion Online',
            'Animal Jam',
            'APB Reloaded',
          ],
        },
        {
          title: 'OSRS',
          items: [
            'OSRS',
            'RS3',
            'WoW Classic',
            'WoW Retail',
            'Final Fantasy XIV',
            'Roblox',
            'All',
            '4Story',
            '8 Ball Pool',
            '9 Dragons',
            'Aion Classic',
            'Aion Online',
            'Albion Online',
            'Animal Jam',
            'APB Reloaded',
          ],
        },
      ],
    },
    {
      title: 'Items',
      expanded: false,
      subItems: [
        {
          title: 'OSRS',
          items: [
            'OSRS',
            'RS3',
            'WoW Classic',
            'WoW Retail',
            'Final Fantasy XIV',
            'Roblox',
            'All',
            '4Story',
            '8 Ball Pool',
            '9 Dragons',
            'Aion Classic',
            'Aion Online',
            'Albion Online',
            'Animal Jam',
            'APB Reloaded',
          ],
        },
        {
          title: 'OSRS',
          items: [
            'OSRS',
            'RS3',
            'WoW Classic',
            'WoW Retail',
            'Final Fantasy XIV',
            'Roblox',
            'All',
            '4Story',
            '8 Ball Pool',
            '9 Dragons',
            'Aion Classic',
            'Aion Online',
            'Albion Online',
            'Animal Jam',
            'APB Reloaded',
          ],
        },
        { title: 'RS3', items: ['RS3'] },
      ],
    },
    {
      title: 'Accounts',
      expanded: false,
      subItems: [
        {
          title: 'OSRS',
          items: [
            'OSRS',
            'RS3',
            'WoW Classic',
            'WoW Retail',
            'Final Fantasy XIV',
            'Roblox',
            'All',
            '4Story',
            '8 Ball Pool',
            '9 Dragons',
            'Aion Classic',
            'Aion Online',
            'Albion Online',
            'Animal Jam',
            'APB Reloaded',
          ],
        },
        {
          title: 'OSRS',
          items: [
            'OSRS',
            'RS3',
            'WoW Classic',
            'WoW Retail',
            'Final Fantasy XIV',
            'Roblox',
            'All',
            '4Story',
            '8 Ball Pool',
            '9 Dragons',
            'Aion Classic',
            'Aion Online',
            'Albion Online',
            'Animal Jam',
            'APB Reloaded',
          ],
        },
        { title: 'RS3', items: ['RS3'] },
      ],
    },
    {
      title: 'Services',
      expanded: false,
      subItems: [
        {
          title: 'OSRS',
          items: [
            'OSRS',
            'RS3',
            'WoW Classic',
            'WoW Retail',
            'Final Fantasy XIV',
            'Roblox',
            'All',
            '4Story',
            '8 Ball Pool',
            '9 Dragons',
            'Aion Classic',
            'Aion Online',
            'Albion Online',
            'Animal Jam',
            'APB Reloaded',
          ],
        },
        {
          title: 'OSRS',
          items: [
            'OSRS',
            'RS3',
            'WoW Classic',
            'WoW Retail',
            'Final Fantasy XIV',
            'Roblox',
            'All',
            '4Story',
            '8 Ball Pool',
            '9 Dragons',
            'Aion Classic',
            'Aion Online',
            'Albion Online',
            'Animal Jam',
            'APB Reloaded',
          ],
        },
      ],
    },
    {
      title: 'More',
      expanded: false,
      subItems: [
        {
          title: 'OSRS',
          items: [
            'OSRS',
            'RS3',
            'WoW Classic',
            'WoW Retail',
            'Final Fantasy XIV',
            'Roblox',
            'All',
            '4Story',
            '8 Ball Pool',
            '9 Dragons',
            'Aion Classic',
            'Aion Online',
            'Albion Online',
            'Animal Jam',
            'APB Reloaded',
          ],
        },
        {
          title: 'OSRS',
          items: [
            'OSRS',
            'RS3',
            'WoW Classic',
            'WoW Retail',
            'Final Fantasy XIV',
            'Roblox',
            'All',
            '4Story',
            '8 Ball Pool',
            '9 Dragons',
            'Aion Classic',
            'Aion Online',
            'Albion Online',
            'Animal Jam',
            'APB Reloaded',
          ],
        },
        { title: 'RS3', items: ['RS3'] },
      ],
    },
    {
      title: 'Sell',
      expanded: false,
      subItems: [
        {
          title: 'OSRS',
          items: [
            'OSRS',
            'RS3',
            'WoW Classic',
            'WoW Retail',
            'Final Fantasy XIV',
            'Roblox',
            'All',
            '4Story',
            '8 Ball Pool',
            '9 Dragons',
            'Aion Classic',
            'Aion Online',
            'Albion Online',
            'Animal Jam',
            'APB Reloaded',
          ],
        },
        {
          title: 'OSRS',
          items: [
            'OSRS',
            'RS3',
            'WoW Classic',
            'WoW Retail',
            'Final Fantasy XIV',
            'Roblox',
            'All',
            '4Story',
            '8 Ball Pool',
            '9 Dragons',
            'Aion Classic',
            'Aion Online',
            'Albion Online',
            'Animal Jam',
            'APB Reloaded',
          ],
        },
       
      ],
    },
    
  ];

  accordionToggle(item: any) {
    item.expanded = !item.expanded;
  }

  toggleMenu(event: Event) {
    console.log(event);
    const menu = event.target as HTMLElement;
    console.log(menu);
    //menu.classList.toggle('is-active');
    document.querySelector('.menuppal')?.classList.toggle('is_active');
    console.log(document.querySelector('.menuppal'));
    event.preventDefault();
  }
}
