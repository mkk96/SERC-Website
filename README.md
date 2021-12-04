Requirement: -
	•	Flask latest version
	
	•	Virtual environment 
	
	•	SerpAPI


How to install prerequisite requirnment module: -

	•	Pip install flask
	
	•	Pip install virtualenv
	
	•	pip install google-search-results
	
Other module used: -

	•	python os module
	
File Structure: -

	•	Source folder
	
		o	Static
		
				Files
			
				•	namephoto.csv
				
				•	reso.csv
				
				Images
			
				•	{1-40}.jpg
				
				•	back.jpg
				
				•	research_areas.jpg
				
				Scripts
			
				•	main.js
				
				Styles
			
				•	main.css
				
		o	Templates
		
				admin.html
			
				contact.html
			
				event.html
			
				focus.html
			
				index.html
			
				profile.html
			
				publication.html
			
				resources.html
			
		o	Venv
		
				Python module
			
		o	app.py

In Templates folder I have all the HTML files

In Scripts Folder I have all JavaScript Files

In Styles Folder I Have all CSS files

In image Folder I have all images used in throughout the website

In file folder I have two CSV file namephoto.csv and reso.csv which contain information required in People and Resource Subsection.

How to Run:
	use following command in command promt 
	•	cd Path/source folder
	•	.\venv\Scripts\Activate.ps1
	•	python  .\app.py

After python .\app.py command wepapplication is deployed on local server it can access via using this http://127.0.0.1:5000/ address in browser or address mention in terminal.

After accessing website using above URL first will appears will be Home Page. In home we have header which is common in through out the site. Headers contain Home, people, publication, focus area, event, resource, contact, admin which all lead to their respective html page.


Home Tab

In Home I have four types of content: -

•	Running News header in form from right to left which can be control via Admin Mode

•	One Twitter space which update all tweets by SERC IIIT Hyderabad in descending order by date.

•	One is About what is SERC and goal of SERC.

•	One is news which updating from IIIT.ac.in site if click on any news heading it will redirect to news source.


People Tab

In People tab we have 5 different subtab which lead to different result in people page. For people I am using namephoto.csv file which contain following information: -

•	Category like Professor, PhD students etc.

•	Name of individual like Mukul etc.

•	Photo Relative URL or External Photo URL

•	Information about individual like if he is PhD student then all information regarding the thesis they are working on etc.

With using csv file, we can implement people.html page for different category of people with only one HTML page. Parsing data in main.js and generating gallery with profile photo with their name and information about them self all taken from CSV. So, if we must add or remove entry, we need to just update CSV without doing touching the site pages. 

In People page we have header which is same as home page and one running new heading from right to left which can be modify by admin mode.

Then we have a heading related to category which also differentiate between different people info.

Then we have a profile and name with their information about themselves 


Publication Tab

In Publication tab we have header which is same as home page and new heading which running from right to left that can be modified by admin.

Data in Publication tab is populated from google scholar SerpAPI based on word like IIIT H, IIIT Hyderabad, International Institute of Information Technology Hyderabad. Parsing json got from API and retrieving information like Title of paper, Brief Summary of Paper, Authors, Number of cited, and Link to their original publication.

After getting all these information creating dynamic table where size of table depend on number of entries and entries is filled based on date in descending order. After creating table it will appear in webpage every time we refresh it will get new data from API to display.


Focus Tab

In focus Tab we have same header and running news heading as home page. As content I displayed all research area by image taken from SERC website.


Event Tab

In Event tab we have same header and running news heading as home page. Event is populated by RSS API which generate API from iiit.ac.in event page and displayed in rectangular box with title and brief summary and if click on any of event it will redirect to the source page of event.


Resource Tab

In Resource tab I have same header and running new heading as home page. To populated content to resource tab I am using reso.csv file which contain following information: -

•	Category: - like project, teaching etc.

•	Title: -	like Student project, Software engineering

•	Summary: - brief Summary

•	Link: - Link of original content

Using CSV file, I am only using one html file for all subtopic of resource tab.

After collecting all information, I am generating dynamic table in which width and height of table depend on content of table. In table we have two heading name and their summary and if we click on summary then it will redirect to original content and link is empty it will redirect to home page of website. Also heading of page changing depending of category we selected like if we click on teacher the heading will show teacher and one dynamic table will be populated below the heading


Contact Tab
In Contact tab we have facility to mail some query to respective department by filing required information.


Admin Tab

In Admin tab we have header and running news same as home page. In Admin tab we can modified the behavior of running news header. Initially running news header in disabled mode. But in admin page we were asked to select if we want a running header or not. If we click on yes, a running news header will appear in all tabs in a website. If we select no then running news header will be disabled mode until we switch on again. 


Admin Mode to manage content: -

Running news header from right to left can be manage by Admin mode. We have two option either to trun off or on. If we click yes the news header will appears in all tab. if we click on No then it will disappears.


Publication Data: - 

Taking publication data from Google scholar SerpAPI filtered on key word like IIIT H, IIIT Hyderabad, International Institute of Information Technology Hyderabad and after parsing json from API displaying selected data in dynamic table.


News/Updates: -

News and Twitter space is in home page in left side we have news space in which new taken from iiit.ac.in and displayed through RSS API and in right side we have Twitter space where data is taken from twitter api and displyed 