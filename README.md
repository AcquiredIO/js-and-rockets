# JS & Rockets

**Description:** Home task for Automate FE

**Owner:** [Automate Frontend](https://mate.adjust.com/teams/automate-frontend)

**Contacts:** automate-team@adjust.com, pavel.prokudin@adjust.com

---

Welcome to our little coding exercise. During this test you will be given the opportunity to play with Javascript and rockets in the same project. Some people might be horrified at the thought of this even being a possibility, but Javascript is what we do isn't it?

<img align="center" src="https://i.imgur.com/ekyJNd9.jpg" width="600">

Before you begin **please make sure you read this readme file entirely** and that you understand everything. If there's anything that you don't understand, please don't hesitate to reach out and ask.

We'd like to give all candidates taking this test the same opportunity to solve the exercise in their own way, because of this we kindly ask you **not to fork or share this repo (or your solution) with anybody**

## Instructions

1. Read all of the 'Exercise' section before you start.
2. You **MUST clone** this repo to a location of your choosing where you can work on your solution. See how to clone a repository [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)
3. Write your solution to the exercise making sure the provided tests are green. **Please DO NOT modify anything inside of `/tests`**
4. Push your solution to a **private repo** in your **personal Github account**.
5. When you are ready for us to take a look add users `paul-pro`, `AragonCodes` and `Sc4ramouche` as collaborators to your repo.

## Exercise

Using the past launches endpoint from the SpaceX API consolidate a list of all the missions that were launched in 2018 that carried a payload belonging to NASA. Missions should appear in inverse chronological order, with the exception of those that carried more payloads should appear first.

Display the outcome of your solution by rendering the list to the screen as JSON while keeping an indentation of 2 spaces. To make the evaluation process simpler we only care to see the flight number, the mission name, and the amount of payloads carried by each mission.

## Expected output

Your solution is expected to render the following:

```json
[
  {
    "flight_number": 62,
    "mission_name": "Iridium NEXT Mission 6",
    "payloads_count": 2
  },
  {
    "flight_number": 72,
    "mission_name": "CRS-16",
    "payloads_count": 1
  },
  {
    "flight_number": 64,
    "mission_name": "CRS-15",
    "payloads_count": 1
  },
  {
    "flight_number": 60,
    "mission_name": "TESS",
    "payloads_count": 1
  },
  {
    "flight_number": 59,
    "mission_name": "CRS-14",
    "payloads_count": 1
  }
]
```

## Clarifications

- We expect that your solution would be parameterizable, it has already been reflected in tests, just make sure that your code passes them
- Make sure the specs are green
- You can use any **utility** library you see fit (please don't use React, Angular or Vue).
- You can request the data from `https://api.spacexdata.com/v3/launches/past`, but you are not allowed to use any of the filter parameters provided by the SpaceX API.
- It doesn't matter to which NASA program each payload belongs to as long as NASA is the customer.
- Payloads are carried in the second stage of a rocket and they can belong to multiple customers.

## Helpful links

- [SpaceX API Docs][spacex-api]
- [Inviting collaborators to a personal repository][github-collaborators]

[spacex-api]: https://docs.spacexdata.com/?version=latest#fce450d6-e064-499a-b88d-34cc22991bcc
[github-collaborators]: https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository
