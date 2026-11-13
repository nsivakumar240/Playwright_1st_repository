

Feature: Playwright Window Handling


@method11
 Scenario: Verify multiple tabs handling


   Given User launches the browser
   When User opens multiple browser tabs
   Then User verifies the total number of tabs
   When User switches between browser tabs
  Then User verifies the selected tab




@method11
Scenario: Verify new tab handling     (context.waitForEvent('page'))


   Given User launches the browser
   When User opens the Windows application
   And User clicks on the New Tab button
   Then User captures the newly opened tab
   And User verifies the new tab URL and title
   And User closes the new tab




@method11
Scenario: Verify popup window handling
   Given User launches the browser
   When User opens the popup application
   And User clicks on the popup button
   Then User captures the popup window
   And User verifies the popup URL and title
   And User closes the popup window






 @method11
Scenario: Close individual browser tabs
   Given User launches the browser
   When User opens multiple browser tabs
   Then User verifies the total number of tabs
   When User closes the second tab
   Then User verifies the remaining tabs


@method11
Scenario: Verify URLs and titles of multiple windows
   Given User launches the browser
   When User opens multiple browser tabs
   Then User verifies all browser tab URLs and titles

