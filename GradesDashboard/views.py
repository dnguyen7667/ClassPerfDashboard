from django.shortcuts import render
import pandas as pd
import os
from array import *
import seaborn as sns
import numpy as np

# render all the numbers
df = pd.read_csv('../data/grades.csv',header=0)


df = df.pivot(index='SGUID', columns=['readabletitle'], values='Score')

df['bins']  = pd.cut(df['q1'], bins = range(0,101, 10)).astype(str)

bins_count = pd.pivot_table(data=df, index = 'bins', values = 'q1', aggfunc='count')


# print(df)
# print(bins_count)
# print (type(bins_count.index))
# print("bins count values: ",bins_count.get_values())

bins = list(bins_count.index)
counts = list(bins_count['q1'].values)

# print("Bins: ",bins)
# print("Counts: ",counts)
# print(sns.color_palette("light:#5A9",10))
color_palette = sns.light_palette("seagreen", len(bins_count))
color_palette = ([tuple(int(a*255) for a in i) for i in color_palette])
# print(color_palette)
# color_palette = [x*255 for x]# multiply each with 255
color_palette = list(map(lambda x: 'rgb'+ str(x), color_palette)) # make it into string of rbg()
# color_palette = ['rgb(237, 208, 208)' ,'rgb(237, 208, 208)' ,'rgb(237, 208, 208)' ,'rgb(237, 208, 208)' ,'rgb(237, 208, 208)' ,'rgb(237, 208, 208)' ]
# print (list(map(lambda x: 'rgb' + str(x), color_palette)))
# print(sns.color_palette("RdBu", ))
print(color_palette)




# df of students taken or not taken quiz
# df_quiz_taken_count = pd.DataFrame({})

count_taken = [8,5]

avg_time_taken = 35

avg_time_taken_by_group = [np.random.uniform(1,90) for i in counts]



#each problem: percentage of right or wrong answers
problems = list(range(1,5))
problems_correct_answer_percentages = [np.random.uniform(0,1) for i in problems]
problems_incorrect_answer_percentages = [1-i for i in problems_correct_answer_percentages]


# Create your views here.
def indexPage(request):
    context={'bins': bins, 'counts': counts, 'color_palette': color_palette, 
             'count_taken': count_taken, 'avg_time_taken': avg_time_taken,
             'avg_time_taken_by_group': avg_time_taken_by_group,
             'problems': problems, 
             'problems_correct_answer_percentages': problems_correct_answer_percentages,
             'problems_incorrect_answer_percentages' : problems_incorrect_answer_percentages
             }
    
    return render(request, 'index.html', context)