import {test as myTest} from "@playwright/test"

type Preksha = {
    age: number,
    email: string
}

const myFixtureTest = myTest.extend<Preksha>({
    age: 22,
    email: "preksha.vora11@gmail.com"
})

export const test = myFixtureTest;