<template>
<div id="menu">
  <nav class="navbar">
    <div class="navigation-bar">
    <ul>
       <li v-for="item in menuItems" :key="item.id" @click="showDropdown(item.id)" >
        <a :href="item.url">{{ item.label }}</a>
        <ul v-if="item.showDropdown" class="dropdown">
          <li v-for="subItem in item.dropdownItems" :key="subItem.id">
            <a :href="subItem.url">{{ subItem.label }}</a>
          </li>
        </ul>
      </li>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      
    </ul>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { id: 1, label:'Home', url: '/blogPagefooter' },
        { id: 2, label: 'Categorys', url: '#', showDropdown: false,

          dropdownItems: [
            { id: 3, label: 'Category 1', url: '#' },
            { id: 4, label: 'Category 2', url: '#' }
          ]
        },
        { id: 5, label: 'Tags', url: '#', },
        { id: 6, label: 'Posts', url: '#', showDropdown: false,

          dropdownItems: [
            { id: 7, label: 'post 1', url: '#' },
            { id: 8, label: 'post 2', url: '#' },
            { id: 9, label: 'post 3', url: '#' },
            { id: 10, label: 'post 4', url: '#' },
            { id: 11, label: 'post 5', url: '#' },
            { id: 12, label: 'post 6', url: '#' },
            { id: 13, label: 'post 7', url: '#' },
            { id: 14, label: 'post 8', url: '#' },
          ]
        }

      ],

    };
  },
  methods: {
    showDropdown(itemId) {
      const item = this.menuItems.find(item => item.id === itemId);
      if (item) {
        item.showDropdown = true;
      }
    },
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#menu{
  position: relative;
  display: block;
}
#menu ul{
  background-color: #222;
  width: 100%;
  list-style: none;
  position: relative;
  margin: 0px;
  padding: 0px;
  float: left; 
}
#menu ul a{
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  line-height: 32px;
  padding: 0px 15px;
  display: block;
}
#menu ul li{
  float: left;
  position: relative;
  margin: 0px;
  padding: 0px;
}
#menu ul li:hover{
  background: green;
}
#menu ul ul{
  position: absolute;
  background: #2c3e50;
  top: 100%;
  left: 0;
  display: none;
}
#menu ul ul li{
  float: none;
  width: 150px;
}
#menu ul ul li:hover{
  border-left: 3px solid black;
}
#menu ul li:hover ul{
  display: block;

}
form{
  text-align: center;
  padding: 3.5px;
  margin: 4px;
}


@media (max-width: 768px) {
  #menu ul ul li{
    display: block;
    float: none;
    width: 150px;
  }
  /* Styles for screens smaller than 768px */
}

@media (min-width: 769px) and (max-width: 1024px) {
  /* Styles for screens between 769px and 1024px */
}

@media(min-width: 1025px) {
  /* Styles for screens larger than 1025px */
}



</style>
