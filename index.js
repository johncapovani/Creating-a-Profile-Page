
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Carl the Dog')
content.append(header)

//add div class dog content

let divDogContent = document.createElement('div')
divDogContent.setAttribute('class','dog-content')
content.append(divDogContent)

//add dog image

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image', dogImage.src = './assets/rizzo.jpg')
content.append(dogImage)

//add dog details and description

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
content.append(dogDetails)

let dogDetailsHeader = document.createElement('h3')
dogDetailsHeader.append('Description:')
content.append(dogDetailsHeader)

let dogDetailsParagraph = document.createElement('p')
dogDetailsParagraph.append('This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.')
content.append(dogDetailsParagraph)

//add feeding time list
let feedingTimeHeader = document.createElement('h3')
feedingTimeHeader.append('Feeding Times:')
content.append(feedingTimeHeader)

let unorderdList = document.createElement('ul')
content.append(unorderdList)

let listItem1 = document.createElement('li')
listItem1.append('9:00 am')
content.append(listItem1)

let listItem2 = document.createElement('li')
listItem2.append('12:00 pm')
content.append(listItem2)

let listItem3 = document.createElement('li')
listItem3.append('5:00 pm')
content.append(listItem3)

