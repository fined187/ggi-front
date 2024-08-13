# 기존 컨테이너 중지하고 제거
$CONTAINER_NAME = "ggi-web"
$CONTAINER_ID = (docker ps -a -q -f name=$CONTAINER_NAME)

Write-Host "Check1"

# 이미지 pull
$IMAGE_NAME = "wtlee1871/ggi-web:latest"
docker pull $IMAGE_NAME

Write-Host "Check2"

if ($CONTAINER_ID) {
  docker stop $CONTAINER_ID
  docker rm -f $CONTAINER_ID
  if ($?) {
    docker rmi -f $CONTAINER_NAME
  }
}

# 새 컨테이너 실행
docker run -d --name $CONTAINER_NAME -p 3000:3000 `
  -e NEXT_PUBLIC_NAVER_MAP_API=$env:NEXT_PUBLIC_NAVER_MAP_API `
  -e NEXT_PUBLIC_NAVER_MAP_SECRET=$env:NEXT_PUBLIC_NAVER_MAP_SECRET `
  -e NEXT_PUBLIC_DAWUL_API_KEY=$env:NEXT_PUBLIC_DAWUL_API_KEY `
  -e NEXT_PUBLIC_NATIONAL_API_KEY=$env:NEXT_PUBLIC_NATIONAL_API_KEY `
  -e NEXT_PUBLIC_KAKAO_URL=$env:NEXT_PUBLIC_KAKAO_URL `
  -e NEXT_PUBLIC_KAKAO_API_KEY=$env:NEXT_PUBLIC_KAKAO_API_KEY `
  -e NEXT_PUBLIC_GONG_GONG_API_KEY=$env:NEXT_PUBLIC_GONG_GONG_API_KEY `
  -e NEXT_PUBLIC_ADDR_API_KEY=$env:NEXT_PUBLIC_ADDR_API_KEY `
  -e NEXT_PUBLIC_GONGGONG_KEY=$env:NEXT_PUBLIC_GONGGONG_KEY `
  -e NEXT_PUBLIC_KAKAO_JS_KEY=$env:NEXT_PUBLIC_KAKAO_JS_KEY `
  $IMAGE_NAME