Feature: Login

Background: a user logs in
Given a user logs in with username 'test@master' and password 'a'

@runThis
Scenario: a customer is selected
When we select a customer called 'BRIAN FISHER'

Then we see what vehicles they own called 'MERCEDES BENZ'