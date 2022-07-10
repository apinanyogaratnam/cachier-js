VERSION := 1.0.0

workflow:
	git tag -m "v${VERSION}" v${VERSION}
	git push --tags
