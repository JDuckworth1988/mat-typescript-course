Feature: Login

Background: a user logs in
Given a user logs in with username 'test@dev' and password 'a'

@runThis
Scenario: a customer is selected
When we select a customer called 'BRIAN FISHER'

Then we see what vehicles they own called 'Mercedes-Benz'