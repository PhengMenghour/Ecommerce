<template>
    <div class="account-details-page">
      <h1>Account Details</h1>
      <form>
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" placeholder="Annie" />
        </div>
        
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" placeholder="Mario" />
        </div>
        
        <div class="form-group">
          <label for="country">Country/Region</label>
          <select id="country">
            <option>United Kingdom (UK)</option>
            <!-- Add more countries as options here -->
          </select>
          <p class="note">This will be how your name will be displayed in the account section and in reviews</p>
        </div>
        
        <h2>Password Change</h2>
        
        <div class="form-group">
          <label for="currentPassword">Password</label>
          <input type="password" id="currentPassword" placeholder="••••••••••••" />
        </div>
        
        <div class="form-group">
          <label for="newPassword">New Password</label>
          <input type="password" id="newPassword" />
        </div>
        
        <div class="form-group">
          <label for="confirmPassword">Confirm New Password</label>
          <input type="password" id="confirmPassword" />
        </div>
        
        <button type="submit" class="btn-save">Save Changes</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AccountDetailsPage'
  }
  </script>
  
  <style scoped>
  .account-details-page {
    max-width: 600px;
    margin: 0 auto;
  }
  
  h1, h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  input, select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .note {
    font-size: 0.875rem;
    color: #666;
  }
  
  .btn-save {
    display: block;
    width: 100%;
    padding: 0.75rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
  }
  
  .btn-save:hover {
    background-color: #0056b3;
  }
  </style>
  