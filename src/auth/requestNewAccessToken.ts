import { AccessTokenResponse } from "../types/types";
import { API_URL } from "./authConstants";

//solicitar un nuevo token de acceso

export default async function requestNewAccessToken(refreshToken: string) {
  const response = await fetch(`${API_URL}/refresh-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (response.ok) {
    const json = (await response.json()) as AccessTokenResponse;

    if (json.error) {
      throw new Error(json.error);
    }
    return json.body.accessToken;
  } else {
    throw new Error("No se puede actualizar el token de acceso.");
  }
}
