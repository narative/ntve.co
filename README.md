![Narative Logo Header](https://res.cloudinary.com/narative/image/upload/v1554161802/home-meta.jpg)

Narative builds brands, websites and products for growth-minded companies.. <br />
We're a team with senior startup experience here to help your business take the next step.

<br />

# Ntve.co

A link shortener for Narative.co


#### How it works

When Contentful articles are updated this script will rebuild and create the new redirects.


#### Installation

```sh
# Go to your favourite directory and clone
git clone git@github.com:narative/ntve.co.git && cd ntve.co

# Install all depedencies
yarn

# 🎉 That's it, you've installed repo locally.
```

#### Enviroment Variables

This project uses [Contentful](https://www.contentful.com) to pull in the redirect paths. To get this variables you can go to a couple different locations. First, you can log directly into Narative's Contentful account and look for the API keys. Second, you can check [Netlify's](https://netlify.com) deploy settings for the variables.

#### Running the code locally

```sh
yarn start
```


#### Deployment
Push to `master` and it will autodeploy
