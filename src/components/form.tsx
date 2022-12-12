import { useForm } from 'react-hook-form'

import { validateInput } from '@/types/attendance'
import { Attendance } from '@/types/enum'
import { trpc } from '@/utils/trpc'

const Form = () => {
  const mutation = trpc.attendance.submit.useMutation()
  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit((data) => {
    const validation = validateInput.safeParse(data)
    if (validation.success) {
      mutation.mutate(validation.data)
    } else alert(validation.error)
  })

  if (mutation.isSuccess) {
    return (
      <div>
        <h2 className="text-4xl">참석 의사 전달이 완료되었습니다.</h2>
      </div>
    )
  }

  return (
    <form className="grid gap-8" onSubmit={onSubmit}>
      <div>
        <label htmlFor="name" className="font-bold">
          이름
        </label>
        <input
          type="text"
          required
          className="p-2-1 w-full rounded-lg border border-amber-900 "
          {...register('name')}
        />
      </div>
      <div className="grid grid-cols-2">
        <label htmlFor="number" className="font-bold">
          동반 인원 수
        </label>
        <div className="text-right">
          <input
            type="number"
            required
            className="p-2-1 mr-4 w-3/4 rounded-lg border border-amber-900 max-xs:w-1/2"
            {...register('number')}
          />
          <span>명</span>
        </div>
      </div>
      <div className="grid gap-4 leading-loose">
        <h2 className="font-bold">식사 및 참석 여부</h2>
        <div>
          <input
            type="radio"
            id="attendance1"
            value={Attendance.Enum['참석 예정']}
            checked
            {...register('attendance')}
          />
          <label htmlFor="attendance1" className="pl-3">
            참석 할 예정이고, 식사도 할 예정입니다.
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="attendance2"
            value={Attendance.Enum['참석만 식사는 X']}
            {...register('attendance')}
          />
          <label htmlFor="attendance2" className="pl-3">
            참석은 할 예정이지만, 식사는 안할 예정입니다.
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="attendance3"
            value={Attendance.Enum['참석만 식사는 X']}
            {...register('attendance')}
          />
          <label htmlFor="attendance3" className="pl-3">
            마음만 함께 하겠습니다.
          </label>
        </div>
      </div>
      <button className="w-full rounded-lg bg-blue-600 p-3 text-white">
        참석 여부 제출
      </button>
    </form>
  )
}

export default Form
