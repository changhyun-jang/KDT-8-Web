import { useForm } from "react-hook-form";
export default function Form() {
  // 필수, input태그에서 사용
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //handleSubmit : 두개의 함수를 받는데 하나는 유효할때 실행되는 함수 (필수)
  //두번째는 유효하지 않을때 실행되는 함수(선택)
  const onValid = (data) => {
    console.log(data);
  };
  const onInValid = (error) => {
    console.log("Error", error);
  };
  //   console.log(watch());
  console.log("errors", errors);
  return (
    <>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        {/* register 2번째인자에 watch로 인한 조건 처리 */}
        <input
          {...register("username", {
            required: "이름을입력하세요",
            minLength: { message: "최소 2글자 이상 작성하세요", value: 2 },
          })}
          placeholder="username"
        />
        {/* 에러체크할떄는 ? 필요 */}
        {errors.username?.message}
        <input
          {...register("email", {
            required: "이메일을 입력하세요.",
            validate: {
              useGmail: (value) => {
                return (
                  value.includes("gmail.com") || "gmail로만 가입가능합니다"
                );
              },
            },
          })}
          placeholder="email"
        />
        {errors.email?.message}
        <input {...register("password")} />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
