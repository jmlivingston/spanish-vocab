import { getUserData, setUserData } from "../../../helpers";

export default async function handler(request, response) {
  switch (request.method) {
    case "GET": {
      const { data, user } = await getUserData();
      response.status(200).json({ data, user });
      break;
    }
    case "PUT": {
      const { data, user } = JSON.parse(request.body);
      await setUserData({ data, user });
      response.status(200).json({});
      break;
    }
  }
}
