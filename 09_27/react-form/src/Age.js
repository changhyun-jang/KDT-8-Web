import { useForm } from "react-hook-form";
export default function Age() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onValid = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("name", {
            required: "이름은 필수 항목입니다.",
          })}
          placeholder="이름"
        />
        {errors.name?.message}
        <br />
        <input
          {...register("age", {
            validate: {
              upZero: (value) => {
                return value > 0 || "0이상의 숫자만 입력가능합니다";
              },
            },
          })}
          placeholder="나이"
        />
        {errors.age?.message}
        <br />

        <button type="submit">제출</button>
      </form>
    </div>
  );
}
