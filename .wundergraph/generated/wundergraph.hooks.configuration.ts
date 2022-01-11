// Code generated by wunderctl. DO NOT EDIT.

import Fastify from "fastify";
import axios from "axios";
import {
	DragonsResponse,
	MissionsResponse,
	MissionsInput,
	InternalMissionsInput,
	InjectedMissionsInput,
} from "./models";
import { HooksConfiguration } from "@wundergraph/sdk/dist/configure";

declare module "fastify" {
	interface FastifyRequest {
		ctx: Context;
		setClientRequestHeaders: {
			[key: string]: string;
		};
	}
}

export interface Context {
	user?: User;
	setClientRequestHeader: (name: string, value: string) => void;
}

export interface User {
	provider?: string;
	provider_id?: string;
	email?: string;
	email_verified?: boolean;
	name?: string;
	first_name?: string;
	last_name?: string;
	nick_name?: string;
	description?: string;
	user_id?: string;
	avatar_url?: string;
	location?: string;
	roles?: Role[];
}

export type Role = "admin" | "user";

export type AuthenticationResponse = AuthenticationOK | AuthenticationDeny;

export interface AuthenticationOK {
	status: "ok";
	user: User;
	message?: never;
}

export interface AuthenticationDeny {
	status: "deny";
	user?: never;
	message?: string;
}

const hooksToken = `Bearer ${process.env.HOOKS_TOKEN}`;

const internalRequest = async (operationName: string, input?: any): Promise<any> => {
	const url = "http://localhost:9991/internal/api/main/operations/" + operationName;
	const res = await axios.post(url, JSON.stringify(input || {}), {
		headers: {
			"Content-Type": "application/json",
			Authorization: hooksToken,
		},
	});
	return res.data;
};

interface InternalClient {
	queries: {
		Dragons: () => Promise<DragonsResponse>;
		Missions: (input: InternalMissionsInput) => Promise<MissionsResponse>;
	};
}

const client = {
	queries: {
		Dragons: async () => internalRequest("Dragons"),
		Missions: async (input: InternalMissionsInput) => internalRequest("Missions", input),
	},
};

// configureWunderGraphHooksWithClient configures the WunderGraph hooks with an injected client
// the client exposes all Operations, allowing you to implement side effects
// more info on how to use hooks can be found here: https://wundergraph.com/docs/overview/features/typesafe_hooks
// hooks reference docs: https://wundergraph.com/docs/reference/wundergraph_config_ts/overview
export const configureWunderGraphHooksWithClient = (config: (client: InternalClient) => HooksConfig) =>
	configureWunderGraphHooks(config(client));

export interface HooksConfig {
	authentication?: {
		postAuthentication?: (user: User) => Promise<void>;
		mutatingPostAuthentication?: (user: User) => Promise<AuthenticationResponse>;
		revalidate?: (user: User) => Promise<AuthenticationResponse>;
	};
	queries?: {
		Dragons?: {
			mockResolve?: (ctx: Context) => Promise<DragonsResponse>;
			preResolve?: (ctx: Context) => Promise<void>;
			postResolve?: (ctx: Context, response: DragonsResponse) => Promise<void>;
			mutatingPostResolve?: (ctx: Context, response: DragonsResponse) => Promise<DragonsResponse>;
		};
		Missions?: {
			mockResolve?: (ctx: Context, input: InjectedMissionsInput) => Promise<MissionsResponse>;
			preResolve?: (ctx: Context, input: InjectedMissionsInput) => Promise<void>;
			mutatingPreResolve?: (ctx: Context, input: InjectedMissionsInput) => Promise<InjectedMissionsInput>;
			postResolve?: (ctx: Context, input: InjectedMissionsInput, response: MissionsResponse) => Promise<void>;
			mutatingPostResolve?: (
				ctx: Context,
				input: InjectedMissionsInput,
				response: MissionsResponse
			) => Promise<MissionsResponse>;
		};
	};
	mutations?: {};
}

// configureWunderGraphHooks configures the WunderGraph hooks without injecting an internal client
// more info on how to use hooks can be found here: https://wundergraph.com/docs/overview/features/typesafe_hooks
// hooks reference docs: https://wundergraph.com/docs/reference/wundergraph_config_ts/overview
export const configureWunderGraphHooks = (config: HooksConfig) => {
	const hooksConfig: HooksConfiguration = {
		queries: config.queries as { [name: string]: { preResolve: any; postResolve: any; mutatingPostResolve: any } },
		mutations: config.mutations as { [name: string]: { preResolve: any; postResolve: any; mutatingPostResolve: any } },
		authentication: config.authentication as {
			postAuthentication?: any;
			mutatingPostAuthentication?: any;
			revalidate?: any;
		},
	};
	const server = {
		config: hooksConfig,
		start() {
			const fastify = Fastify({
				logger: true,
			});

			fastify.addHook<{ Body: { user: User } }>("preHandler", async (req, reply) => {
				req.setClientRequestHeaders = {};
				req.ctx = {
					user: req.body.user,
					setClientRequestHeader: (name, value) => (req.setClientRequestHeaders[name] = value),
				};
			});

			// authentication
			fastify.post("/authentication/postAuthentication", async (request, reply) => {
				reply.type("application/json").code(200);
				if (config.authentication?.postAuthentication !== undefined && request.ctx.user !== undefined) {
					try {
						await config.authentication.postAuthentication(request.ctx.user);
					} catch (err) {
						request.log.error(err);
						reply.code(500);
						return { hook: "postAuthentication", error: err };
					}
				}
				return {
					hook: "postAuthentication",
				};
			});
			fastify.post("/authentication/mutatingPostAuthentication", async (request, reply) => {
				reply.type("application/json").code(200);
				if (config.authentication?.mutatingPostAuthentication !== undefined && request.ctx.user !== undefined) {
					try {
						const out = await config.authentication.mutatingPostAuthentication(request.ctx.user);
						return {
							hook: "mutatingPostAuthentication",
							response: out,
							setClientRequestHeaders: request.setClientRequestHeaders,
						};
					} catch (err) {
						request.log.error(err);
						reply.code(500);
						return { hook: "mutatingPostAuthentication", error: err };
					}
				}
			});
			fastify.post("/authentication/revalidateAuthentication", async (request, reply) => {
				reply.type("application/json").code(200);
				if (config.authentication?.revalidate !== undefined && request.ctx.user !== undefined) {
					try {
						const out = await config.authentication.revalidate(request.ctx.user);
						return {
							hook: "revalidateAuthentication",
							response: out,
							setClientRequestHeaders: request.setClientRequestHeaders,
						};
					} catch (err) {
						request.log.error(err);
						reply.code(500);
						return { hook: "revalidateAuthentication", error: err };
					}
				}
			});

			/**
			 * Queries
			 */

			// mock
			fastify.post("/operation/Dragons/mockResolve", async (request, reply) => {
				reply.type("application/json").code(200);
				try {
					const mutated = await config?.queries?.Dragons?.mockResolve?.(request.ctx);
					return {
						op: "Dragons",
						hook: "mock",
						response: mutated,
						setClientRequestHeaders: request.setClientRequestHeaders,
					};
				} catch (err) {
					request.log.error(err);
					reply.code(500);
					return { op: "Dragons", hook: "mock", error: err };
				}
			});

			// preResolve
			fastify.post("/operation/Dragons/preResolve", async (request, reply) => {
				reply.type("application/json").code(200);
				try {
					await config?.queries?.Dragons?.preResolve?.(request.ctx);
					return {
						op: "Dragons",
						hook: "preResolve",
						setClientRequestHeaders: request.setClientRequestHeaders,
					};
				} catch (err) {
					request.log.error(err);
					reply.code(500);
					return { op: "Dragons", hook: "preResolve", error: err };
				}
			});
			// postResolve
			fastify.post<{ Body: { response: DragonsResponse } }>(
				"/operation/Dragons/postResolve",
				async (request, reply) => {
					reply.type("application/json").code(200);
					try {
						await config?.queries?.Dragons?.postResolve?.(request.ctx, request.body.response);
						return {
							op: "Dragons",
							hook: "postResolve",
							setClientRequestHeaders: request.setClientRequestHeaders,
						};
					} catch (err) {
						request.log.error(err);
						reply.code(500);
						return { op: "Dragons", hook: "postResolve", error: err };
					}
				}
			);
			// mutatingPostResolve
			fastify.post<{ Body: { response: DragonsResponse } }>(
				"/operation/Dragons/mutatingPostResolve",
				async (request, reply) => {
					reply.type("application/json").code(200);
					try {
						const mutated = await config?.queries?.Dragons?.mutatingPostResolve?.(request.ctx, request.body.response);
						return {
							op: "Dragons",
							hook: "mutatingPostResolve",
							response: mutated,
							setClientRequestHeaders: request.setClientRequestHeaders,
						};
					} catch (err) {
						request.log.error(err);
						reply.code(500);
						return { op: "Dragons", hook: "mutatingPostResolve", error: err };
					}
				}
			);

			// mock
			fastify.post<{ Body: { input: InjectedMissionsInput } }>(
				"/operation/Missions/mockResolve",
				async (request, reply) => {
					reply.type("application/json").code(200);
					try {
						const mutated = await config?.queries?.Missions?.mockResolve?.(request.ctx, request.body.input);
						return {
							op: "Missions",
							hook: "mock",
							response: mutated,
							setClientRequestHeaders: request.setClientRequestHeaders,
						};
					} catch (err) {
						request.log.error(err);
						reply.code(500);
						return { op: "Missions", hook: "mock", error: err };
					}
				}
			);

			// preResolve
			fastify.post<{ Body: { input: InjectedMissionsInput } }>(
				"/operation/Missions/preResolve",
				async (request, reply) => {
					reply.type("application/json").code(200);
					try {
						await config?.queries?.Missions?.preResolve?.(request.ctx, request.body.input);
						return {
							op: "Missions",
							hook: "preResolve",
							setClientRequestHeaders: request.setClientRequestHeaders,
						};
					} catch (err) {
						request.log.error(err);
						reply.code(500);
						return { op: "Missions", hook: "preResolve", error: err };
					}
				}
			);
			// postResolve
			fastify.post<{ Body: { input: InjectedMissionsInput; response: MissionsResponse } }>(
				"/operation/Missions/postResolve",
				async (request, reply) => {
					reply.type("application/json").code(200);
					try {
						await config?.queries?.Missions?.postResolve?.(request.ctx, request.body.input, request.body.response);
						return {
							op: "Missions",
							hook: "postResolve",
							setClientRequestHeaders: request.setClientRequestHeaders,
						};
					} catch (err) {
						request.log.error(err);
						reply.code(500);
						return { op: "Missions", hook: "postResolve", error: err };
					}
				}
			);
			// mutatingPreResolve
			fastify.post<{ Body: { input: InjectedMissionsInput } }>(
				"/operation/Missions/mutatingPreResolve",
				async (request, reply) => {
					reply.type("application/json").code(200);
					try {
						const mutated = await config?.queries?.Missions?.mutatingPreResolve?.(request.ctx, request.body.input);
						return {
							op: "Missions",
							hook: "mutatingPreResolve",
							input: mutated,
							setClientRequestHeaders: request.setClientRequestHeaders,
						};
					} catch (err) {
						request.log.error(err);
						reply.code(500);
						return { op: "Missions", hook: "mutatingPreResolve", error: err };
					}
				}
			);
			// mutatingPostResolve
			fastify.post<{ Body: { input: InjectedMissionsInput; response: MissionsResponse } }>(
				"/operation/Missions/mutatingPostResolve",
				async (request, reply) => {
					reply.type("application/json").code(200);
					try {
						const mutated = await config?.queries?.Missions?.mutatingPostResolve?.(
							request.ctx,
							request.body.input,
							request.body.response
						);
						return {
							op: "Missions",
							hook: "mutatingPostResolve",
							response: mutated,
							setClientRequestHeaders: request.setClientRequestHeaders,
						};
					} catch (err) {
						request.log.error(err);
						reply.code(500);
						return { op: "Missions", hook: "mutatingPostResolve", error: err };
					}
				}
			);

			fastify.listen(9992, (err, address) => {
				if (err) {
					console.error(err);
					process.exit(0);
				}
				console.log(`hooks server listening at ${address}`);
			});
		},
	};

	if (process.env.START_HOOKS_SERVER === "true") {
		server.start();
	}

	return server;
};
