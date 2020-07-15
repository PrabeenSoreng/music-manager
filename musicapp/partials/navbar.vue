<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <div class="container">
        <a href="#" class="navbar-brand">Music App</a>
        <button
          class="bavbar-toggler"
          type="button"
          data-toggler="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a href="#" class="nav-link">Player</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Manager</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav-link,
.navbar-brand {
  color: #ffff !important;
}
</style>