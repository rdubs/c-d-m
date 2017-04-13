# Company Data Miner

## Overview
Implement a program that ingests the given JSON file (you may choose whatever language you want, however please take note if you decide to do this using javascript, you will also need to implement a method of taking input as a UI component and explain this in your final README.  If you decide to use node or some other JS framework to facilitate console based entry, please note this and explain how to use and all requirements to run your code locally).  

Once ingested, we want to be able to run queries against this data and return the count and the list of Human Readable names for this query.  We want to be able to:

* Find the list of companies by Location (state only).  This should be done by using the `locate` keyword
		`e.g. : locate CA`
* Find the list of companies founded before or after a specific year.  This should be done using the `find_before` or `find_after` key phrase(s)
		`e.g. find_before 1999`
		`find_after 2002`
	Only one phrase will be used at a time.
* Find the list of companies based on the number of full time employees.  This should use the keyword `find_between_years`
		`e.g. find_between 1,001-5,000`
		
	Possible Options:
	```
	['1-10', '11-50', '51-200', '201-500', '501-1,000', '1,001-5,000', '5,001-10,000', '10,001+']
	```

	**Note, if the company has `N/A` or `NA` as a value for `full_time_employees`, ignore it**



* Find all companies by Company Type. Possible Types are:
```
[’N/A’,
 'Aerospace and Defense',
 'Business & Legal Services',
 'Data/Technology',
 'Data/Technology,',
 'Education',
 'Energy',
 'Environment & Weather',
 'Finance & Investment',
 'Food & Agriculture',
 'Geospatial/Mapping',
 'Governance',
 'Healthcare',
 'Housing/Real Estate',
 'Housing/Real Estate,',
 'Insurance',
 'Lifestyle & Consumer',
 'Media',
 'Research & Consulting',
 'Scientific Research',
 'Transportation']```
 
 
## Example output
#### We are expecting all output to be returned via console

**Locate Example**

```
> python my_program.py data.json locate MD

```
would return a dataset like this:

```
Company Names:
Overture Technologies, Smartronix, ...

Number of Companies: 34
```

**Find before/after Example**

```
> python my_program.py data.json find_after 2002

```
would return a dataset like this:

```
Company Names:
Overture Technologies, Smartronix, ...

Number of Companies: 349
```

**Find Between Years Example**

```
> python my_program.py data.json find_between_years 1,001-5,000

```
would return a dataset like this:

```
Company Names:
Overture Technologies, Smartronix, ...

Number of Companies: 99
```

## Expected deliverables
* An explination of your design and how to use your program/solution.  Example details would be Why you chose the language you did, any design decisons that were made due to the constraints provided, as well as any assumptions you made
* Tests
* List of requirements to run your code locally.  If the code is OS dependent, please make note of this also.


## Example Data 
 **For a larget example, please see data.json included with this README**
 
```
[
  {
    "company_name_id": "3-round-stones-inc",
    "company_name": "3 Round Stones, Inc.",
    "url": "http://3RoundStones.com",
    "year_founded": 2010,
    "city": "Washington",
    "state": "DC",
    "country": "us",
    "zip_code": 20004,
    "full_time_employees": "1-10",
    "company_type": "Private",
    "company_category": "Data/Technology",
    "revenue_source": "Data analysis for clients, Database licensing, Subscriptions",
    "business_model": "Business to Business, Business to Consumer",
    "social_impact": "",
    "description": "3 Round Stones produces a platform for publishing data on the Web. 3 Round Stones provides commercial support for the Callimachus Data Platform, used by the Fortune 2000 and US Government Agencies publishing and consuming data.  Headquartered in Arlington, Virginia, we're seasoned entrepreneurs who are passionate about solving real world problems through open data and open Web standards.",
    "description_short": "Our Open Source platform is used by the Fortune2000 and US Government Agencies to collect, publish and reuse data, both public and proprietary.",
    "source_count": "NA",
    "data_types": "",
    "example_uses": "",
    "data_impacts": "[]",
    "financial_info": "3 Round Stones is a profitable, self-funded, woman-owned start-up.  Our team has several successful serial entrepreneurs.  As entrepreneurs, we've benefited from the valuable guidance by seasoned advisers and mentors in the mid-Atlantic region who have guided our team through multiple start-ups, outside funding and an acquisition by a Fortune 100 company in 2005.",
    "last_updated": "2014-11-12 14:44:25.969871"
  }
 ]
```