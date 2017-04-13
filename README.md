## ASSUMPTIONS
  1. The year in the find_before and find_after commands is not inclusive (e.g. find_before 2016 would return all companies founded strictly before 2016)
  2. According to the spec, the keyword `find_between_years` should be used to find companies whose employee count is in a specific range. This is misleading,
     as 'find_between_years' suggests finding companies that were founded in a range of years. I assumed this was a typo/miscommunication and renamed the command
     to be 'find_employees_in_range'.
  3. I also assumed that each command is to be run with a .json file. The alternative would be to load the file once, and then query the data with different commands.
     This option seems to me the most intuitive, however the spec seems to suggest that the data file is parsed on each command.

## Design
  Had I not made assumption 3, I would have optimized differently. If the data file was intended to be parsed once and remain in memory between commands I would have done the following:

    For the 'location' command: 
    I would have kepth a hash mapping a state code to a list of all the companies in that state. This would allow constant time lookup for any location.

    For the 'find_before'/'find_after' command:
    After parsing all of the data, I would have sorted the companies in increasing order of founding date. Upon a 'find_before'/'find_after' query, I would take the provided year and run a binary search to find the FIRST ocurrence of that year in the sorted list of companies. Then I would return all the companies before that index.

    For the 'find_employees_in_range' and 'find_by_type' commands:
    I would again use a hash.

  If I were to anticipate more commands, I would use a switch statement instead of the current if/else control flow.

## Tests
  A simple test file using mocha.js can be found in the test directory. I used a random subset of the data.json file for testing purposes. See testData.json.

## Requirements
  Run 'npm install'
  To run the tests run 'npm test'
