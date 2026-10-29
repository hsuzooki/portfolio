import { next } from '@vercel/functions'

export const config = {
	matcher: '/:path*',
}

export default function middleware(request) {
	// 本番以外では認証しない
	if (process.env.VERCEL_ENV !== 'production') {
		return next()
	}

	const username = 'portfolio'
  const password = '12347890'

	// 設定漏れの場合は公開せず、エラーを返す
	if (!username || !password) {
		return new Response('Authentication is not configured.', {
			status: 503,
			headers: {
				'Cache-Control': 'no-store',
			},
		})
	}

	const authorization = request.headers.get('authorization')

	if (authorization) {
		const [scheme, encoded] = authorization.split(' ')

		if (scheme.toLowerCase() === 'basic' && encoded) {
			try {
				const decoded = atob(encoded)
				const separator = decoded.indexOf(':')

				if (separator !== -1) {
					const inputUser = decoded.slice(0, separator)
					const inputPassword = decoded.slice(separator + 1)

					if (
						inputUser === username &&
						inputPassword === password
					) {
						return next()
					}
				}
			} catch {
				// 不正な認証情報は下の401を返す
			}
		}
	}

	return new Response('Authentication required.', {
		status: 401,
		headers: {
			'WWW-Authenticate': 'Basic realm="Portfolio"',
			'Cache-Control': 'no-store',
		},
	})
}
