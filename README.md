# PDK Static Website Sample

## 준비
- NodeJS (>= 18)
- pnpm
```
npm i -g pnpm
```
- aws-cdk
```
pnpm add -g aws-cdk
```
- cdk bootstrap
```
cd packages/infra
# 다음 명령의 실행을 위해, 리소스를 배포할 AWS 계정의 cli credential 설정을 해야 한다. (ex> aws configure 등의 방법)
cdk bootstrap
```

## packages
- CDK IaC (packages/infra)
- 웹앱 (packages/webapp)

