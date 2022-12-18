import { Octokit } from "octokit";
import { environment } from 'src/environments/environment';

const octokit = new Octokit({ auth: environment.github_token });

export const getAllUsers = (per_page: number) => {
    return octokit.rest.users.list({
        per_page: per_page
    });
}

export const getUserDetails = (username: string) => {
    return octokit.rest.users.getByUsername({ username })
}

