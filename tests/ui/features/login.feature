Feature: Login

  Scenario: Login exitoso
    Given el usuario está en la página de login
    When ingresa credenciales válidas
    Then debería ver el dashboard
